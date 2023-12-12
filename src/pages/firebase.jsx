import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { enableLogging } from "@firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYMN-5fhu-t5AXutLZ2dUz744toNXi6q0",
  authDomain: "Eco - Bionics-347611.firebaseapp.com",
  projectId: "Eco - Bionics-347611",
  storageBucket: "Eco - Bionics-347611.appspot.com",
  messagingSenderId: "377688754359",
  appId: "1:377688754359:web:af9ce094f49eb33632a532",
  measurementId: "G-Z05ZK64L6J"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o Firestore
const db = firebase.firestore();

// Obtenha uma referência para o módulo de autenticação do Firebase
const auth = firebase.auth();

export { db, auth };

enableLogging(true);