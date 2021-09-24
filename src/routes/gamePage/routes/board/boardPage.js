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
    const [choiceCard, setChoiseCard] = useState(null)
    const [player2, setPlayer2] = useState([])
    const [player1, setPlayer1] = useState(() => {
        return Object.values(cards.pokemons).map(item => ({
            ...item, 
            possession: 'blue'
        }))
    })

    console.log("###2", player2)
    console.log("###1", player1)

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
        console.log("###", "poss", position);
        console.log("###", "choiseCard", choiceCard);
    }
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard 
                    player={1}
                    cards={player1}
                    onClickCard={(card) => setChoiseCard(card)}
                />
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
                <PlayerBoard 
                player={2}
                cards={player2}
                onClickCard={(card) => setChoiseCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;