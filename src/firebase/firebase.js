import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDsr1n-kjiOH1muQRCc_LDwBOBSJrBTgw0",
    authDomain: "the-financial-tracker.firebaseapp.com",
    databaseURL: "https://the-financial-tracker.firebaseio.com",
    projectId: "the-financial-tracker",
    storageBucket: "the-financial-tracker.appspot.com",
    messagingSenderId: "183864585202"
  };

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Ashley Brown'
});