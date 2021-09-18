import { useHistory } from "react-router";
import PokemonCard from "../../components/pokemonCard";
import { useState, useEffect } from "react";

import cardBG from "../../assets/cardBack.jpg"

import database from "../../services/firebase";

const GamePage = () => {

    const hist = useHistory();
    
    const handleClickButton = () => {
        hist.push("/")
    }

    const [cards, setPokemons] = useState({});

    
    const writeDataActive = async (objID, pokemonObj) => {
        await database.ref('pokemons/'+ objID).set({
            ...pokemonObj,
            "active": true,
        });          
    }
    
    useEffect(() => {
        database.ref("pokemons").once("value", (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    const handleCardClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const hesh = item[0];
                if (pokemon.id === id) {
                    pokemon.active = true;
                    writeDataActive(hesh, pokemon);
                };
        
                acc[item[0]] = pokemon;
        
                return acc;
            }, {});
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

    // console.log(cards);
    // Object.entries(cards).map(([key, val] ) => console.log(key, val));

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
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
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;