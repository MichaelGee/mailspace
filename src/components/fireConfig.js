import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGES_ENDERURL,
  appId: process.env.REACT_APP_APP_ID,
  measureId: process.env.MEASUREMENT_ID
});

export default firebaseConfig;

/* class Fire {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async signup(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username
    });
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  getCurrentUser() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Fire(); */
