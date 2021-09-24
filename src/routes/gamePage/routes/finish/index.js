import { useContext } from "react";
import PokemonCard from "../../../../components/pokemonCard";
import cardBG from "../../../../assets/cardBack.jpg"
import { PokemonContext } from "../../../../services/pokemonContext";
import s from "./style.module.css"
import { useHistory } from "react-router";

const FinishPage = () => {
    const cards = useContext(PokemonContext);
    const history = useHistory()

    if(!Object.values(cards.pokemons).length){
        history.replace("/game/");
    }

    return (
        <div>
             <h1>Finish</h1>
             <section className={s.player}>
             {Object.entries(cards.pokemons).map(([key, {id, type, values, img, name, selected}]) => (
                 <div className={s.cardWrap}>
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
             <button className={s.btnCenter}> End game</button>
             <section className={s.player}>
             {Object.entries(cards.pokemonsEnemy).map(([key, {id, type, values, img, name, selected}]) => (
                 <div className={s.cardWrap}>
                    <PokemonCard 
                        key={id}
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
        </div>
    )
}

export default FinishPage;