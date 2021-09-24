import PokemonCard from "../../../../../../components/pokemonCard";
import cardBG from "../../../../../../assets/cardBack.jpg"
import s from "./style.module.css"
import { useState } from "react";
import cn from "classnames";

const PlayerBoard = ({cards}) => {
    const [isSelected, setSelected] = useState(null)

    return (
    <>
        {cards.map(({id, type, values, img, name, selected}) => (
            <div className={cn(s.cardBoard, {
                [s.selected]: isSelected === id
            })}
            onClick={() => {setSelected(id)}}
            >
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