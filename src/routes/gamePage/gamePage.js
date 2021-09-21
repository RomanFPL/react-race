import { useHistory } from "react-router";
import PokemonCard from "../../components/pokemonCard";
import { useState, useEffect, useContext} from "react";
import s from "./style.module.css"

import cardBG from "../../assets/cardBack.jpg"

import database from "../../services/firebase";
import { FireBaseContext } from "../../services/firebaseContect";

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
    const firebase = useContext(FireBaseContext)
    const hist = useHistory();
    
    const handleClickButton = () => {
        hist.push("/")
    }

    const [cards, setPokemons] = useState({});

    const addNewCard = () => {
        firebase.addPokemon(newPokemon, async () => {
            await pokemonsAsState();
        })
    }

    const pokemonsAsState = async () => {
        const response = await firebase.getPokemonsOnce();
        setPokemons(response);
    }
    
    useEffect(() => {
        pokemonsAsState();
    });

    const handleCardClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };
                
                acc[item[0]] = pokemon;
                firebase.postPokemon(item[0], pokemon);

        
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