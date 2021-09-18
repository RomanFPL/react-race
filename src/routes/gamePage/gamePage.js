import { useHistory } from "react-router";
import PokemonCard from "../../components/pokemonCard";
import { useState, useEffect } from "react";

import cardBG from "../../assets/cardBack.jpg"
import POKEMONS from "../../assets/pokemons";

import database from "../../services/firebase";

database.ref("pokemons").on("value", (snapshot) => {
    console.log(snapshot.val())
})


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

    const handleCardClick = (id) => {
        setPokemons(prevState => {
            return Array.from(prevState, (item) => {
                if(item.id === id){
                    item.active = true;
                }
                return item;
            })
        })
        // const newCrads = cards.map(x => x.id === id ? {...x, active: true} : x);
        // setPokemons(newCrads);
    }

    console.log(cards);

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
                    <div className="flex">
                        {Object.entries(cards).map(([key, card]) => 
                        <PokemonCard 
                            key={card.id} 
                            type={card.type} 
                            values={card.values} 
                            img={card.img} 
                            name={card.name} 
                            id={card.id} 
                            cardBG={cardBG} 
                            active={card.active === true} 
                            handleCardClick={handleCardClick}/>)}
                    </div>
                </section>
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;