import s from "./pokemonCard.module.css"

const PokemonCard = () => {
    return (
        <div className={s.root}>
            <div className={s.pokemonCard}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        {/* <div className="pokemon <-- Type Pokemon -->">
                            <div className="values">
                                <div className="count top"><-- Count Value --></div>
                                <div className="count right"><-- Count Value --></div>
                                <div className="count bottom"><-- Count Value --></div>
                                <div className="count left"><-- Count Value --></div>
                            </div>
                            <div className="imgContainer">
                                <img src="<-- Pokemon Picture -->" alt="<-- Name Pokemon -->" />
                            </div>
                            <div className="info">
                                <span className="number">#{<-- ID Pokemon -->}</span>
                                <h3 className="name"><-- Name Pokemon --></h3>
                                <small className="type">Type: <span><-- Type Pokemon --></span></small>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src="<-- Card Backed Picture -->" alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;