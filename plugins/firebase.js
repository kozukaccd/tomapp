import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
      apiKey: "AIzaSyDwyrLNbku_IBcD3M8NEtqlRl9e1bVXHEg",
      authDomain: "tomapp-c6397.firebaseapp.com",
      databaseURL: "https://tomapp-c6397.firebaseio.com",
      projectId: "tomapp-c6397",
      storageBucket: "",
      messagingSenderId: "1091923549723"
    }
  )
}

export default firebase