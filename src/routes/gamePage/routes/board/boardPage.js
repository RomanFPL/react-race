import { useContext, useEffect, useState } from 'react';
import PokemonCard from '../../../../components/pokemonCard';
import { PokemonContext } from '../../../../services/pokemonContext';
import s from './style.module.css';

import { useHistory } from 'react-router';
import PlayerBoard from './components/PlayerBoard';


const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;
    board.forEach(item => {
        if(item && item.card && item.card.possession === 'red'){
            player2Count++;
        }
        if(item && item.card && item.card.possession === 'blue'){
            player1Count++;
        }
    });

    return [player1Count, player2Count];
}


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
    const [steps, setSteps] = useState(0);

    console.log(cards, player2, player1)

    useEffect(() => {
        (async function () {
            const boardResponse = await fetch("https://reactmarathon-api.netlify.app/api/board");
            const boardRequest = await boardResponse.json();
            setBoard(boardRequest.data)

            const player2Response = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
            const player2Requerst = await player2Response.json();
            cards.addEnemyCards(player2Requerst.data);
            setPlayer2(() => {
                return player2Requerst.data.map(item => ({
                    ...item,
                    possession: 'red'
                }))
            })
            })()
    }, [])

    if(Object.keys(cards.pokemons).length === 0){
        history.replace("/game");
    }

    const handleClickBoardPlate = async (position) => {
        if(choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board
            };
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const request = await res.json();
        
        if(choiceCard.player === 1) {
            setPlayer1(prev => prev.filter(item => item.id !== choiceCard.id))
        }
        
        if(choiceCard.player === 2) {
            setPlayer2(prev => prev.filter(item => item.id !== choiceCard.id))
        }
        
        setBoard(request.data);

        setSteps(prev => {
            const count = prev + 1;
            return count;
        })

        }
    }

    useEffect(() => {
        counterWin(board, player1, player2)
        if(steps === 9){
            const [count1, count2] = counterWin(board, player1, player2);

            if(count1 > count2){
                cards.setGameStatus(1);
                alert("WIN");
            } else if(count1 < count2){
                alert("LOSE")
            } else {
                alert("DROW")
            }

            history.push("/game/finish")
        
        }
    },[steps])

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
                        {item.card && <PokemonCard {...item.card} isActive minimize />}
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