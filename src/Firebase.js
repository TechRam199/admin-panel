import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNFxhfem82ZoJ9uYpY3KgB8zqNxSZ6Nl8",
  authDomain: "lamma-434cf.firebaseapp.com",
  projectId: "lamma-434cf",
  storageBucket: "lamma-434cf.appspot.com",
  messagingSenderId: "308190992311",
  appId: "1:308190992311:web:a36a4160d9c3af42b7fa32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app