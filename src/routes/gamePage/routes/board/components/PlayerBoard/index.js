import PokemonCard from "../../../../../../components/pokemonCard";
import cardBG from "../../../../../../assets/cardBack.jpg"
import s from "./style.module.css"
import { useState } from "react";
import cn from "classnames";

const PlayerBoard = ({player, cards, onClickCard, enemySelect}) => {
    const [isSelected, setSelected] = useState(null)

    return (
    <>
        {cards.map((item) => (
            <div key={item.id} className={cn(s.cardBoard, {
                [s.selected]: isSelected === item.id},
            {
                [s.selected]: enemySelect === item.id
            })}
            onClick={
                () => {
                    if(player === 1){
                        setSelected(item.id);
                        onClickCard && onClickCard({
                            ...item, player
                        })
                    }
                }
        }
            >
                <PokemonCard
                    type={item.type} 
                    values={item.values} 
                    img={item.img} 
                    name={item.name} 
                    id={item.id} 
                    cardBG={cardBG} 
                    isActive={true} 
                    isSelected={item.selected}
                    minimize/>        
            </div>
        ))}
    </>
    )
}

export default PlayerBoard;