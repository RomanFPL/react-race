import { useContext, useEffect, useState } from 'react';
import PokemonCard from '../../../../components/pokemonCard';
import { PokemonContext } from '../../../../services/pokemonContext';
import s from './style.module.css';

import cardBG from "../../../../assets/cardBack.jpg"
import { useHistory } from 'react-router';
import PlayerBoard from './components/PlayerBoard';

const BoardPage = () => {
    const cards = useContext(PokemonContext);

    const history = useHistory();
    const [board, setBoard] = useState([])
    const [player2, setPlayer2] = useState([])
    const [player1, setPlayer1] = useState(() => {
        return Object.values(cards).map(item => ({
            ...item, 
            possession: 'blue'
        }))
    })

    console.log("###", player2)

    useEffect(async () => {
        const boardResponse = await fetch("https://reactmarathon-api.netlify.app/api/board");
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data)

        const player2Response = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
        const player2Requerst = await player2Response.json();
        setPlayer2(() => {
            return player2Requerst.data.map(item => ({
                ...item,
                possession: 'red'
            }))
        })
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
                        isSelected={false}
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
                <PlayerBoard cards={player2}/>
            </div>
        </div>
    );
};

export default BoardPage;