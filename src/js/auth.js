import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const firebaseConfig = {
    apiKey: 'AIzaSyCV6f6aG22DfSBaBoYWmBnY_HyPGLMXoQo',
    authDomain: 'cactus-fa97b.firebaseapp.com',
    projectId: 'cactus-fa97b',
    storageBucket: 'cactus-fa97b.appspot.com',
    messagingSenderId: '12006324600',
    appId: '1:12006324600:web:c9779d3efb58b6bc15f08d',
    measurementId: 'G-1M4FLPZ6S0',
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInButton = document.querySelector('.authorization__wrapper');

const handleSignInOut = async () => {
      if (auth.currentUser) {
        try {
          await signOut(auth);
          Notiflix.Notify.failure('Goodbay');
        } catch (error) {
          console.log(error.message);
        }
      } else {
        const provider = new GoogleAuthProvider();
        try {
          const user = await signInWithPopup(auth, provider);
          Notiflix.Notify.success(`Welcome, ${user.user.displayName}!`);
        } catch (error) {
          console.log(error.message);
        }
      }
    };

signInButton.addEventListener('click', handleSignInOut);



  