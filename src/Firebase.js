// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDiT5sBQXAykA39kMp8f3YuroRDhj-CNw",
  authDomain: "shop-c4fb2.firebaseapp.com",
  projectId: "shop-c4fb2",
  storageBucket: "shop-c4fb2.appspot.com",
  messagingSenderId: "635526808086",
  appId: "1:635526808086:web:b7f57fbdac727248d86b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app