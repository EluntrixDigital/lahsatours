# Troubleshooting Guide - App Not Loading

## Quick Checks

### 1. Is the Dev Server Running?
- Check terminal for: `Local: http://localhost:4000`
- If not running, execute: `npm run dev`

### 2. Open Browser Console
- Press `F12` or `Ctrl+Shift+I` to open DevTools
- Check the **Console** tab for errors
- Check the **Network** tab for failed requests

### 3. Common Issues & Solutions

#### Issue: Blank White Screen
**Possible Causes:**
- JavaScript errors in console
- Firebase initialization error
- Missing dependencies

**Solution:**
1. Open browser console (F12)
2. Look for red error messages
3. Check if Firebase is properly configured
4. Try clearing browser cache (Ctrl+Shift+Delete)

#### Issue: "Cannot find module" errors
**Solution:**
```bash
npm install
```

#### Issue: Firebase errors
**Solution:**
1. Check `src/firebase/config.js` has correct credentials
2. Make sure Firebase services are enabled in Firebase Console:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage

#### Issue: Port already in use
**Solution:**
```bash
# Kill process on port 4000
# Windows:
netstat -ano | findstr :4000
taskkill /PID <PID_NUMBER> /F

# Or use different port:
npm run dev -- --port 3000
```

### 4. Test Basic Loading

1. **Check if HTML loads:**
   - Right-click → View Page Source
   - Should see `<div id="root"></div>`

2. **Check if React loads:**
   - Open Console
   - Type: `React`
   - Should see React object

3. **Check if Firebase loads:**
   - Open Console
   - Type: `firebase`
   - Should see Firebase object (if imported globally)

### 5. Clear Cache & Restart

```bash
# Stop dev server (Ctrl+C)
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Restart dev server
npm run dev
```

### 6. Check Browser Compatibility
- Use Chrome, Firefox, or Edge (latest versions)
- Disable browser extensions that might interfere
- Try incognito/private mode

### 7. Verify File Structure
Make sure these files exist:
- ✅ `src/main.jsx`
- ✅ `src/App.jsx`
- ✅ `src/firebase/config.js`
- ✅ `src/contexts/AuthContext.jsx`
- ✅ `index.html`

### 8. Check Network Tab
- Open DevTools → Network tab
- Refresh page
- Look for:
  - Failed requests (red)
  - 404 errors
  - CORS errors

### 9. Common Error Messages

#### "Failed to resolve import"
- **Fix:** Run `npm install`

#### "Firebase: Error (auth/configuration-not-found)"
- **Fix:** Check Firebase config in `src/firebase/config.js`

#### "Cannot read property of undefined"
- **Fix:** Check browser console for specific line number

#### "Module not found"
- **Fix:** Check import paths are correct

### 10. Test Routes

Try these URLs:
- `http://localhost:4000/` - Home page
- `http://localhost:4000/admin/login` - Admin login
- `http://localhost:4000/admin/dashboard` - Admin dashboard (requires login)

## Still Not Working?

1. **Share the error message** from browser console
2. **Check terminal output** for build errors
3. **Verify Firebase setup** is complete
4. **Try a fresh install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## Quick Test

Create a simple test file to verify React works:

```jsx
// src/Test.jsx
export default function Test() {
  return <h1>Test Works!</h1>
}
```

Then import it in App.jsx temporarily to see if React renders.
