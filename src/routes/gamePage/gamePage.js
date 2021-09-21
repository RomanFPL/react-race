import { useHistory } from "react-router";
import PokemonCard from "../../components/pokemonCard";
import { useState, useEffect } from "react";
import s from "./style.module.css"

import cardBG from "../../assets/cardBack.jpg"

import database from "../../services/firebase";

const newPokemon = {
    "abilities": [
        "blaze",
        "solar-power"
      ],
      "base_experience": 62,
      "height": 6,
      "weight": 85,
      "id": 4,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      "name": "charmander",
      "stats": {
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "special-attack": 60,
        "special-defense": 50,
        "speed": 65
      },
      "type": "fire",
      "values": {
        "top": 1,
        "right": 1,
        "bottom": 2,
        "left": 1
      }
}

const GamePage = () => {

    const hist = useHistory();
    
    const handleClickButton = () => {
        hist.push("/")
    }

    const [cards, setPokemons] = useState({});

    
    const writeDataActive = (objID, pokemonObj) => {
        database.ref('pokemons/'+ objID).set({
            ...pokemonObj,
            "active": true,
        });          
    }

    const addNewCard = () => {
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(newPokemon);
    }

    const pokemonsAsState = () => {
        database.ref("pokemons").once("value", (snapshot) => {
            setPokemons(snapshot.val());
        })
    }
    
    useEffect(() => {
        pokemonsAsState();
    }, []);

    const handleCardClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const hesh = item[0];
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                    writeDataActive(hesh, pokemon);
                };
        
                acc[item[0]] = pokemon;

                database.ref('pokemons/'+item[0]).set(pokemon);
        
                return acc;
            }, {});
        });
    }

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
                <button className={s.btnCenter} onClick={addNewCard}>Add new pokemon</button>
                    <div className="flex">
                        {Object.entries(cards).map(([key, {id, type, values, img, name, active}]) => 
                        <PokemonCard 
                            key={key}
                            type={type} 
                            values={values} 
                            img={img} 
                            name={name} 
                            id={id} 
                            cardBG={cardBG} 
                            active={active === true} 
                            handleCardClick={handleCardClick}/>)}
                    </div>
                </section>
                <button className={s.btnCenter} onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;