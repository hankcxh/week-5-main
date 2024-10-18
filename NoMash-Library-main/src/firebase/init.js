// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG2HSK8wwHVat8D7R9ZjXDi_tRNNfF1aE",
  authDomain: "week7-hank-76120.firebaseapp.com",
  projectId: "week7-hank-76120",
  storageBucket: "week7-hank-76120.appspot.com",
  messagingSenderId: "253450737456",
  appId: "1:253450737456:web:3a72271415cc3b6ef9daf5"
};

initializeApp(firebaseConfig);

const db = getFirestore()
export default db