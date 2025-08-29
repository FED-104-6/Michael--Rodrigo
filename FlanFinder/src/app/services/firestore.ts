// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore, setDoc } from "firebase/firestore";
import { User } from "../models/user";
import { Land } from "../models/land";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4YhSRZKc2lknNPCfRw-8Pofd2lgP_vEc",
  authDomain: "flanfinder-d51ad.firebaseapp.com",
  projectId: "flanfinder-d51ad",
  storageBucket: "flanfinder-d51ad.firebasestorage.app",
  messagingSenderId: "494577718737",
  appId: "1:494577718737:web:9416d59213602c8a77fcf0",
  measurementId: "G-ZQQ94E0C6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

export class FirestoreService {
  async addUser(user: User) {
    try {
      const docRef = await addDoc(collection(db, "users"), user);
      console.log("User added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  }
  async addLandUser(land: Land, userId: string) {
    try {
      const docRef = await addDoc(collection(db, `/users/${userId}/flats`), land);
      console.log("Land added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding land: ", e);
    }
  }
}