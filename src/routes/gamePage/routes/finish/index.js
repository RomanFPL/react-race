import { useContext } from "react";
import PokemonCard from "../../../../components/pokemonCard";
import cardBG from "../../../../assets/cardBack.jpg"
import { PokemonContext } from "../../../../services/pokemonContext";
import s from "./style.module.css"

const FinishPage = () => {
    const cards = useContext(PokemonContext);
    // console.log(cards.pokemonsEnemy)
    Object.entries(cards.pokemonsEnemy).map(x=> console.log(x))
    return (
        <div>
             <h1>This is Game Page!!!</h1>
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