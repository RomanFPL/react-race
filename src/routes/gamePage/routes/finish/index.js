import { useContext } from "react";
import PokemonCard from "../../../../components/pokemonCard";
import cardBG from "../../../../assets/cardBack.jpg"
import { PokemonContext } from "../../../../services/pokemonContext";
import s from "./style.module.css"
import { useHistory } from "react-router";
import cn from "classnames";
import { useState } from "react/cjs/react.development";

const FinishPage = () => {
    const cards = useContext(PokemonContext);
    const history = useHistory()

    const [selectedCard, setSelectedCard] = useState({})
    const [cardNum, setCardNum] = useState({})
    

    if(!Object.values(cards.pokemons).length){
        history.replace("/game/");
    }

    console.log(selectedCard);
    return (
        <div>
             <h1 className={s.btnCenter} style={{textAlign: "center"}}>Finish</h1>
             <h1 className={s.btnCenter} style={{textAlign: "center"}}>You win. Select one from enemy cards to add it to your deck.</h1>
             <section className={s.player}>
             {Object.entries(cards.pokemons).map(([key, {id, type, values, img, name, selected}]) => (
                 <div className={s.cardWrap} key={key}>
                     <PokemonCard 
                         key={key}
                         type={type} 
                         values={values} 
                         img={img} 
                         name={name} 
                         id={id} 
                         cardBG={cardBG} 
                         isActive={true} 
                         handleCardClick={null}
                         isSelected={selected}
                         minimize={null}
                         />
                 </div>
             ))}
             </section>
             <button className={s.btnCenter} onClick={() => history.replace("/game/")}> End game</button>
             <section className={s.player}>
             {Object.entries(cards.pokemonsEnemy).map(([key, {id, type, values, img, name, selected}], i) => (
                 <div className={cn(s.cardWrap, {[s.selectedCard]: cardNum===i})} key={key}>
                    <PokemonCard 
                        key={id}
                        type={type} 
                        values={values} 
                        img={img} 
                        name={name} 
                        id={id} 
                        cardBG={cardBG} 
                        isActive={true} 
                        handleCardClick={() => {
                            setSelectedCard({id, type, values, img, name, selected});
                            setCardNum(i);
                        }}
                        isSelected={selected}
                        minimize={null}
                    />
                 </div>
             ))}
             </section>
        </div>
    )
}

export default FinishPage;