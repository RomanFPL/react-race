import { useHistory } from "react-router";
import PokemonCard from "../../../../components/pokemonCard";
import { useState, useEffect, useContext} from "react";
import s from "./style.module.css"

import cardBG from "../../../../assets/cardBack.jpg"

import { FireBaseContext } from "../../../../services/firebaseContect";
import { PokemonContext } from "../../../../services/pokemonContext";


const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const selectedCards = useContext(PokemonContext);
    const hist = useHistory();
    
    const handleClickButton = () => {
        hist.push("/")
    }

    const handleClickStaert = () => {
        hist.push("/game/board")
    }

    
    const [cards, setPokemons] = useState({});
    
    useEffect(() => {
        firebase.getPokemonsSoket((pokemons) => {
            setPokemons(pokemons);
        })
        return () => firebase.offPokemonsSoket();
    }, []);
    
    const handleActiveSelected = (key) => {
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
        selectedCards.addSelectedCard({[key]: Object.entries(cards).find(card => card[0]===key)[1]})
            // {...Object.entries(cards).filter(x => x[1].selected)});
    }
    console.log(selectedCards.pokemons);

    return (
            <div>
                <h1>This is Game Page!!!</h1>
                <section>
                <button className={s.btnCenter} onClick={handleClickStaert}> Start game...</button>
                    <div className={s.flex}>
                        {Object.entries(cards).map(([key, {id, type, values, img, name, selected}]) => 
                        <PokemonCard 
                            key={key}
                            type={type} 
                            values={values} 
                            img={img} 
                            name={name} 
                            id={id} 
                            cardBG={cardBG} 
                            isActive={true} 
                            handleCardClick={() => handleActiveSelected(key)}
                            isSelected={selected}
                            minimize={null}
                            className={s.card}/>)}
                    </div>
                </section>
                <button className={s.btnCenter} onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default StartPage;