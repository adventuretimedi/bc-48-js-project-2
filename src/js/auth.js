import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import Notiflix from 'notiflix';
import { localFavorites } from './localfavorites';

const FAV_COCKTAIL_KEY = 'favcockt';

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
const db = getFirestore(app);

const signInButton = document.querySelector('.authorization__wrapper');

async function handleSignInOut(){
  if (auth.currentUser) {
    try {
      await signOut(auth);
      Notiflix.Notify.failure('Goodbye');
      
      console.log('exit')
    } catch (error) {
      console.log(error.message);
    }
  } else {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      Notiflix.Notify.success(`Welcome, ${user.user.displayName}!`);
      console.log('hello')
    } catch (error) {
      console.log(error.message);
    }
  }
};

signInButton.addEventListener('click', handleSignInOut);


async function writeUserData(users){
  const userRef = doc(db, 'users', user.uid);
  await setDoc(userRef, {
    displayName: user.displayName,
    email: user.email,
  });
};


auth.onAuthStateChanged(user => {
  if (user) {
    writeUserData(user);
  }
});


