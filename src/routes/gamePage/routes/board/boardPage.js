import { useContext } from 'react';
import PokemonCard from '../../../../components/pokemonCard';
import { PokemonContext } from '../../../../services/pokemonContext';
import s from './style.module.css';

import cardBG from "../../../../assets/cardBack.jpg"

const BoardPage = () => {
    const cards = useContext(PokemonContext);

    const handleClickCard = () => {
        console.log("click!")
    }
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                        {Object.entries(cards.pokemons).map(([key, {id, type, values, img, name, selected}]) => 
                        <PokemonCard 
                            key={key}
                            type={type} 
                            values={values} 
                            img={img} 
                            name={name} 
                            id={id} 
                            cardBG={cardBG} 
                            isActive={true} 
                            handleCardClick={() => handleClickCard(key)}
                            isSelected={selected}
                            minimize={null}
                            className={s.card}/>)}
						</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;