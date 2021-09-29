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

class Firebase {

    constructor() {
      this.fire = firebase;
      this.database= this.fire.database();
    }

    getPokemonsSoket = (cb) => {
      this.database.ref("pokemons").on("value", (snapshot) => {
        cb(snapshot.val())
      })
    }

    offPokemonsSoket = () => {
      this.database.ref("pokemons").off();
    }

    getPokemonsOnce = async () => {
      return await this.database.ref("pokemons").once("value").then(snapshot => 
        snapshot.val())
    }

    postPokemon = (key, pokemon) => {
      this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data) => {
      const newKey = this.database.ref().child('pokemons').push().key;
      this.database.ref('pokemons/' + newKey).set(data);
    }
  }

  const FirebaseClass = new Firebase();

  export default FirebaseClass;
