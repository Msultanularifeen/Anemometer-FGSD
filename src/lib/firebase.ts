// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// IMPORTANT:
// Create a .env.local file in the root of your project and add your Firebase configuration.
// Example .env.local file:
//
// NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
// NEXT_PUBLIC_FIREBASE_DATABASE_URL="your-database-url"
// NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
// NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
//
// The user's ESP32 code specifies the database URL as:
// "https://wind-speed-a5223-default-rtdb.firebaseio.com"
// Make sure to use this in your .env.local file for NEXT_PUBLIC_FIREBASE_DATABASE_URL.

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function initializeFirebase() {
  const isConfigured =
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.databaseURL &&
    firebaseConfig.databaseURL.startsWith('https');

  if (!isConfigured) {
    console.error('Firebase is not configured. Please check your .env.local file.');
    return { app: null, db: null, isConfigured: false };
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getDatabase(app);

  return { app, db, isConfigured: true };
}

const { app, db, isConfigured } = initializeFirebase();

export { app, db, isConfigured };
