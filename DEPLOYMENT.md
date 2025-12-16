# Production Deployment Guide - Nginx

## Step 1: Build the Application

Before deploying, you need to build the production version:

```bash
npm run build
```

This will create a `dist` folder with all the optimized production files.

## Step 2: What to Deploy

### ✅ Deploy These (from the `dist` folder):

After running `npm run build`, copy **ALL contents** of the `dist` folder to your nginx web directory:

- `index.html` - Main HTML file
- `assets/` folder - Contains all JavaScript, CSS, and other assets
  - `assets/*.js` - Bundled JavaScript files
  - `assets/*.css` - Bundled CSS files
  - `assets/*.png`, `assets/*.jpg`, etc. - Images and other assets

### ❌ DO NOT Deploy:

- `node_modules/` folder - Not needed in production
- `src/` folder - Source files (already compiled in dist)
- `.env` files - Environment variables (if any)
- `package.json` - Not needed for static hosting
- `vite.config.js` - Build configuration (not needed)
- Any other development files

## Step 3: Nginx Configuration

Nginx is perfect for serving this React application! Here's the complete configuration:

### Main Configuration File

Create or edit your nginx configuration file (typically at `/etc/nginx/sites-available/varanasitours`):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/varanasitours/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Main location block - React Router support
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Don't cache index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Error pages
    error_page 404 /index.html;
}
```

**Important:** Replace `your-domain.com` with your actual domain name.

## Step 4: Deployment Steps

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Copy dist folder to server:**
   ```bash
   # On your local machine, use SCP or SFTP to copy files
   scp -r dist/* user@your-server:/var/www/varanasitours/dist/
   
   # Or use rsync
   rsync -avz dist/ user@your-server:/var/www/varanasitours/dist/
   ```

3. **Set proper file permissions:**
   ```bash
   sudo chown -R www-data:www-data /var/www/varanasitours
   sudo chmod -R 755 /var/www/varanasitours
   ```

4. **Create nginx configuration:**
   ```bash
   sudo nano /etc/nginx/sites-available/varanasitours
   # Paste the configuration above
   ```

5. **Enable the site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/varanasitours /etc/nginx/sites-enabled/
   ```

6. **Test nginx configuration:**
   ```bash
   sudo nginx -t
   ```

7. **Reload nginx:**
   ```bash
   sudo systemctl reload nginx
   ```

## Step 5: HTTPS Setup (SSL)

For production, you should use HTTPS. Use Let's Encrypt with Certbot:

```bash
# Install certbot (if not already installed)
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot will automatically:
# - Obtain SSL certificate
# - Configure nginx for HTTPS
# - Set up automatic renewal
```

After running certbot, your nginx configuration will be automatically updated to include HTTPS.

## Step 6: Firebase Configuration

Make sure your Firebase configuration is set up correctly:

1. Check `src/firebase/config.js` has the correct Firebase project credentials
2. Ensure Firestore security rules are configured (see `FIRESTORE_RULES.md`)
3. Verify Firebase authentication is enabled
4. Add your domain to Firebase authorized domains in Firebase Console

## Step 7: Test the Production Build Locally

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

This will start a local server with the production build so you can test it.

## Step 8: Post-Deployment Checklist

- [ ] Run `npm run build`
- [ ] Test production build locally with `npm run preview`
- [ ] Copy all files from `dist` folder to nginx web directory
- [ ] Set proper file permissions
- [ ] Configure nginx with the configuration above
- [ ] Test nginx configuration: `sudo nginx -t`
- [ ] Reload nginx: `sudo systemctl reload nginx`
- [ ] Set up HTTPS with Let's Encrypt
- [ ] Verify Firebase configuration
- [ ] Test all routes work correctly (including React Router routes)
- [ ] Test admin login functionality
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness

## Important Notes:

- The `dist` folder contains everything needed to run the app
- No need to deploy source code (`src` folder)
- No need to deploy `node_modules`
- No Node.js server required - nginx serves static files directly
- Make sure your Firebase project is configured for production
- Test thoroughly before going live!
- Keep your nginx configuration backed up

## Troubleshooting

### If routes don't work:
- Make sure `try_files $uri $uri/ /index.html;` is in your location block
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### If files aren't loading:
- Check file permissions: `ls -la /var/www/varanasitours/dist`
- Verify nginx can read the files: `sudo -u www-data ls /var/www/varanasitours/dist`

### If you get 403 Forbidden:
- Fix permissions: `sudo chown -R www-data:www-data /var/www/varanasitours`
- Check SELinux (if enabled): `sudo setsebool -P httpd_read_user_content 1`
