import firebase from "firebase/compat/app"; 
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s",
    authDomain: "pokemon-game-24b59.firebaseapp.com",
    databaseURL: "https://pokemon-game-24b59-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pokemon-game-24b59",
    storageBucket: "pokemon-game-24b59.appspot.com",
    messagingSenderId: "1000311813585",
    appId: "1:1000311813585:web:23afaff20c10973a529cf0"
  };
  
  firebase.initializeApp(firebaseConfig);

export default  class Firebase {

    constructor() {
      this.fire = firebase;
      this.database= this.fire.database();
    }

    getPokemonsOnce = async () => {
      return await this.database.ref("pokemons").once("value").then(snapshot => 
        snapshot.val())
    }
  }
