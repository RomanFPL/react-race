import { useHistory } from "react-router";
import PokemonCard from "../../../../components/pokemonCard";
import { useState, useEffect, useContext} from "react";
import s from "./style.module.css"

import cardBG from "../../../../assets/cardBack.jpg"

import { FireBaseContext } from "../../../../services/firebaseContect";


const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const hist = useHistory();
    
    const handleClickButton = () => {
        hist.push("/")
    }

    const [cards, setPokemons] = useState({});
    
    useEffect(() => {
        firebase.getPokemonsSoket((pokemons) => {
            setPokemons(pokemons);
        })
        return () => firebase.offPokemonsSoket();
    }, []);

    const handleCardClick = (id) => {
      
    }

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
                <button className={s.btnCenter}>Start game...</button>
                    <div className={s.flex}>
                        {Object.entries(cards).map(([key, {id, type, values, img, name, active}]) => 
                        <PokemonCard 
                            key={key}
                            type={type} 
                            values={values} 
                            img={img} 
                            name={name} 
                            id={id} 
                            cardBG={cardBG} 
                            isActive={true} 
                            handleCardClick={handleCardClick}
                            minimize={null}
                            className={s.card}/>)}
                    </div>
                </section>
                <button className={s.btnCenter} onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default StartPage;