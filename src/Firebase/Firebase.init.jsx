// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBWWy7hEdp7R-HSm98DynsRAp2j9mE3Jc",
  authDomain: "the-dragon-news-88fcf.firebaseapp.com",
  projectId: "the-dragon-news-88fcf",
  storageBucket: "the-dragon-news-88fcf.appspot.com",
  messagingSenderId: "199224158093",
  appId: "1:199224158093:web:cd895791f8e7e10adc3fc4",
  measurementId: "G-N92W34NVPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;