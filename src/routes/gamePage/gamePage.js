import { useHistory } from "react-router";
import PokemonCard from "../../components/pokemonCard";
import { useState, useEffect } from "react";

import cardBG from "../../assets/cardBack.jpg"

import database from "../../services/firebase";

const GamePage = () => {
    const hist = useHistory()
    const handleClickButton = () => {
        hist.push("/")
    }

    const [cards, setPokemons] = useState({});

    useEffect(() => {
        database.ref("pokemons").once("value", (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    const handleCardClick = (id, objID) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                };
        
                acc[item[0]] = pokemon;
        
                return acc;
            }, {});
        });
        database.ref('pokemons/'+ objID).set({
            "active": true,
            "abilities": [
                "keen-eye",
                "tangled-feet",
                "big-pecks"
              ],
            "base_experience": 122,
            "height": 11,
            "weight": 300,
            "id": 17,
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name": "pidgeotto",
            "stats": {
                "hp": 63,
                "attack": 60,
                "defense": 55,
                "special-attack": 50,
                "special-defense": 50,
                "speed": 71
              },
              "type": "normal",
              "values": {
                "top": 7,
                "right": 5,
                "bottom": 1,
                "left": 2
              }
        });
        // setPokemons(prevState => {
        //     return Array.from(prevState, (item) => {
        //         if(item.id === id){
        //             item.active = true;
        //         }
        //         return item;
        //     })
        // })
        // const newCrads = cards.map(x => x.id === id ? {...x, active: true} : x);
        // setPokemons(newCrads);
    }

    console.log(cards);
    Object.entries(cards).map(([key, {id, type, values, img, name, active}]) => console.log(typeof key));

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
                    <div className="flex">
                        {Object.entries(cards).map(([key, {id, type, values, img, name, active}]) => 
                        <PokemonCard 
                            key={key}
                            objID={key} 
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
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;