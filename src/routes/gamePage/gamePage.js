import { useHistory } from "react-router";
import PokemonCard from "../../components/pokemonCard";
import { useState } from "react";

import cardBG from "../../assets/cardBack.jpg"
import POKEMONS from "../../assets/pokemons";

const GamePage = () => {
    const hist = useHistory()
    const handleClickButton = () => {
        hist.push("/")
    }

    const [cards, setPokemons] = useState(POKEMONS);

    const handleCardClick = (id) => {
        const newCrads = cards.map(x => x.id === id ? {...x, active: true} : x);
        setPokemons(newCrads);
    }

    console.log(POKEMONS);

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
                    <div className="flex">
                        {cards.map(card => <PokemonCard key={card.id} type={card.type} values={card.values} img={card.img} name={card.name} id={card.id} cardBG={cardBG} active={card.active === true} handleCardClick={handleCardClick}/>)}
                    </div>
                </section>
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;