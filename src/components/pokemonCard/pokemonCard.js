import s from "./pokemonCard.module.css"
import cn from "classnames";

const PokemonCard = ({type, values, img, name, id, cardBG, active, handleCardClick}) => {
    const {top, right, bottom, left} = values;
    
    return (
        <div className={s.root} onClick={() => handleCardClick(id)}>
            <div className={cn(s.pokemonCard, {[s.active] : active})}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s.type)}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{top}</div>
                                <div className={cn(s.count, s.right)} >{right}</div>
                                <div className={cn(s.count, s.bottom)} >{bottom}</div>
                                <div className={cn(s.count, s.left)} >{left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={cardBG} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;