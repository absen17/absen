import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.body.style.display = "block";
  } else {
    window.location.href = "login.html";
  }
});

window.logoutUser = async function () {
  await signOut(auth);
  window.location.href = "login.html";
};