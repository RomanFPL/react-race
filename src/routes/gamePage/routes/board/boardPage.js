import { useContext, useEffect, useState } from 'react';
import PokemonCard from '../../../../components/pokemonCard';
import { PokemonContext } from '../../../../services/pokemonContext';
import s from './style.module.css';

import cardBG from "../../../../assets/cardBack.jpg"
import { useHistory } from 'react-router';

const BoardPage = () => {
    const cards = useContext(PokemonContext);

    const history = useHistory();
    const [board, setBoard] = useState([])

    console.log("###", board)

    useEffect(async () => {
        const boardResponse = await fetch("https://reactmarathon-api.netlify.app/api/board");
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data)
    }, [])
    // if(Object.keys(cards.pokemons).length === 0){
    //     history.replace("/game");
    // }

    const handleClickCard = () => {
        console.log("click!")
    }

    const handleClickBoardPlate = (position) => {
        console.log(position)
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
                            minimize
                            className={s.card}/>)}
						</div>
            <div className={s.board}>
                {board.map(item => (
                    <div 
                    className={s.boardPlate}
                    key={item.position}
                    onClick={() => !item.card && handleClickBoardPlate(item.position)}>
                        {item.card && <PokemonCard {...item} minimize />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoardPage;