import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0q4R70KcZAWYE8PRoTGk36Fyx6xWd40w",
  authDomain: "varanasi-tours.firebaseapp.com",
  projectId: "varanasi-tours",
  storageBucket: "varanasi-tours.firebasestorage.app",
  messagingSenderId: "430498337682",
  appId: "1:430498337682:web:14682617dd925d9f09674b",
  measurementId: "G-WVHJ5TEQPB"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Initialize Analytics (only in browser environment)
let analytics = null
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app)
  } catch (error) {
    console.warn('Analytics initialization failed:', error)
  }
}
export { analytics }

export default app
