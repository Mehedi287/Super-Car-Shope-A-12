import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebasde.config";


const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;