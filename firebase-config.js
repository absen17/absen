import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhvzNn30BXLA9rlrhfuuyHFFmtMbUdKcM",
  authDomain: "project-d-2e62e.firebaseapp.com",
  projectId: "project-d-2e62e",
  storageBucket: "project-d-2e62e.firebasestorage.app",
  messagingSenderId: "293403251893",
  appId: "1:293403251893:web:5379a1de5745f841405afc"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

await setPersistence(auth, browserSessionPersistence);

export { auth };