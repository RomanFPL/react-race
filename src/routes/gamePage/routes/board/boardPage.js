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
    const [player2, setPlayer2] = useState([])

    console.log("###", player2)

    useEffect(async () => {
        const boardResponse = await fetch("https://reactmarathon-api.netlify.app/api/board");
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data)

        const player2Response = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
        const player2Requerst = await player2Response.json();
        setPlayer2(player2Requerst.data)
    }, [])
    // if(Object.keys(cards.pokemons).length === 0){
    //     history.replace("/game");
    // }

    const handleClickCard = () => {
        console.log("click!")
    }

    player2.map(({id, type, values, img, name, selected}) => {
        console.log(id, type, values, img, name, selected)
    });

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
            <div className={s.playerTwo}>
                {player2.map(({id, type, values, img, name, selected}) => 
                            <PokemonCard 
                                key={id}
                                type={type} 
                                values={values} 
                                img={img} 
                                name={name} 
                                id={id} 
                                cardBG={cardBG} 
                                isActive={true} 
                                handleCardClick={() => handleClickCard(id)}
                                isSelected={selected}
                                minimize
                                className={s.card}/>)}
            </div>
        </div>
    );
};

export default BoardPage;