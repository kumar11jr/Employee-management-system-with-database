import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATU6Hk1f5Z2UiVV7Ju_Ah8H87Lj0XSb4k",
  authDomain: "employeemanagement-e3b03.firebaseapp.com",
  databaseURL: "https://employeemanagement-e3b03-default-rtdb.firebaseio.com",
  projectId: "employeemanagement-e3b03",
  storageBucket: "employeemanagement-e3b03.appspot.com",
  messagingSenderId: "402609159198",
  appId: "1:402609159198:web:50918e6e7540a209c9420f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
