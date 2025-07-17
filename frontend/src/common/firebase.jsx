
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD66sHnJJePWZ0Yp_iW2Y-QiKkO0lCSPz0",
  authDomain: "react-js-blog-website-yt-3a79c.firebaseapp.com",
  projectId: "react-js-blog-website-yt-3a79c",
  storageBucket: "react-js-blog-website-yt-3a79c.firebasestorage.app",
  messagingSenderId: "536790931158",
  appId: "1:536790931158:web:4003862957a00a1639db77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}