import { useHistory } from "react-router";
import PokemonCard from "../../../../components/pokemonCard";
import { useState, useEffect, useContext} from "react";
import s from "./style.module.css"

import cardBG from "../../../../assets/cardBack.jpg"

import { FireBaseContext } from "../../../../services/firebaseContect";
import { PokemonContext } from "../../../../services/pokemonContext";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAsync, selectPokemonsData } from "../../../../store/pokemon";


const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const selectedCards = useContext(PokemonContext);
    const hist = useHistory();
    const pokemonsRedux = useSelector(selectPokemonsData);
    const dispatch = useDispatch();
    console.log("#### redux",pokemonsRedux)

    const handleClickButton = () => {
        hist.push("/")
    }

    const handleClickStaert = () => {
        const selectedElems = Object.entries(cards).map(x => x[1]).filter(x => x.selected)
        if(selectedElems.length === 5 ){
            hist.push("/game/board");
            selectedCards.addSelectedCard(selectedElems);
        } else {
            alert("You can start the game only if you have 5 cards selected, no more, no less.")
        }
    }

    const [cards, setPokemons] = useState({});
    
    useEffect(() => {
        firebase.getPokemonsSoket((pokemons) => {
            setPokemons(pokemons);
            dispatch(getPokemonsAsync());
            // dispatch(getPokemons(pokemons));
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
        }

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