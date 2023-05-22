import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCuVCGUT2C306Dk4l4drxLMFf_fsxbkSjg",
  authDomain: "docs-clone-49a7b.firebaseapp.com",
  projectId: "docs-clone-49a7b",
  storageBucket: "docs-clone-49a7b.appspot.com",
  messagingSenderId: "1056956640585",
  appId: "1:1056956640585:web:8eebef6f40fa1768d77e98",
  measurementId: "G-DWLEB4HMD7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
