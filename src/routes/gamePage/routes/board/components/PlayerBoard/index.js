import PokemonCard from "../../../../../../components/pokemonCard";
import cardBG from "../../../../../../assets/cardBack.jpg"
import s from "./style.module.css"

const PlayerBoard = ({cards}) => {
    return (
    <>
        {cards.map(({id, type, values, img, name, selected}) => (
            <div className={s.cardBoard}>
                <PokemonCard 
                    key={id}
                    type={type} 
                    values={values} 
                    img={img} 
                    name={name} 
                    id={id} 
                    cardBG={cardBG} 
                    isActive={true} 
                    isSelected={selected}
                    minimize/>        
            </div>
        ))}
    </>
    )
}

export default PlayerBoard;