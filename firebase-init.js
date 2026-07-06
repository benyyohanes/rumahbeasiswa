import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

export { signInWithEmailAndPassword, signOut, onAuthStateChanged };

const firebaseConfig = {
  apiKey: "AIzaSyA0nsfaj7bok75elBxaECBOyHypEZSWaF4",
  authDomain: "katalog-beasiswa.firebaseapp.com",
  projectId: "katalog-beasiswa",
  storageBucket: "katalog-beasiswa.firebasestorage.app",
  messagingSenderId: "451517981177",
  appId: "1:451517981177:web:5c1649f5ad6718a9a4dd28",
  measurementId: "G-CPCSGEH48W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);