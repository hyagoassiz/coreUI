import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB78mUqu47C9xwIx-Oe7hYk5_eiTkAC0Mw",
  authDomain: "coreui-c07a6.firebaseapp.com",
  projectId: "coreui-c07a6",
  storageBucket: "coreui-c07a6.firebasestorage.app",
  messagingSenderId: "504287691136",
  appId: "1:504287691136:web:146c9eb37aa0f6189c8165",
  measurementId: "G-0ZY2K41H94",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
