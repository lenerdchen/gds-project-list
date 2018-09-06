import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBL1uyI-qaM2I0AT5KROnQuDBDk-eKYZzM",
  authDomain: "gds-project-list.firebaseapp.com",
  databaseURL: "https://gds-project-list.firebaseio.com/"
});

const base = Rebase.createClass(firebaseApp.database());

//named export

export { firebaseApp };

//default export

export default base;
