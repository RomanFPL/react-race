import s from "./pokemonCard.module.css"

const PokemonCard = ({type, values, img, name, id, cardBG}) => {
    const {top, right, bottom, left} = values;
    return (
        <div className={s.root}>
            <div className={s.pokemonCard}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${type}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{top}</div>
                                <div className={`${s.count} ${s.right}`} >{right}</div>
                                <div className={`${s.count} ${s.bottom}`} >{bottom}</div>
                                <div className={`${s.count} ${s.left}`} >{left}</div>
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