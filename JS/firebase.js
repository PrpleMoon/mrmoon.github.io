import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js"; // Uncomment if using analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwksgv0MLr1bVbysYulCsG8gpULXud82c",
  authDomain: "meet-en.firebaseapp.com",
  projectId: "meet-en",
  appId: "1:951364165617:web:2a88e66f381ca79c1bee50",
  measurementId: "G-Q8PC4VB3FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Uncomment if using analytics

function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
        messageDiv.style.opacity = 0;
    }, 5000);
}

document.getElementById('signUpForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const username = document.getElementById('Username').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        const userData = {
            email: email,
            username: username
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(() => {
            window.location.href = 'register.html';
        })
        .catch((error) => {
            console.error("Error writing document", error);
            showMessage('Error writing user data', 'signUpMessage');
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        if (errorCode == 'auth/email-already-in-use') {
            showMessage('Email Address Already In Use!', 'signUpMessage');
        } else {
            showMessage('Unable to create user', 'signUpMessage');
        }
    });
});
