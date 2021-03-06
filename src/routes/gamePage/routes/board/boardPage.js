import { useEffect, useState } from 'react';
import PokemonCard from '../../../../components/pokemonCard';
import s from './style.module.css';

import { useHistory } from 'react-router';
import PlayerBoard from './components/PlayerBoard';
import {selectPokemonsPlay, setGameStatus, setPokemonsEnemy } from '../../../../store/pokemon';
import { useDispatch, useSelector } from 'react-redux';
import request from '../../../../services/request';


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

const returnBoard = (board) => {
    return board.map((item, index) => {
        let card = null;
        if(typeof item === 'object'){
            card = {
                ...item.poke,
                possession: item.holder === 'p1' ? 'blue' : 'red'
            }
        }
        return {
            position: index +1, 
            card 
        }
    })
}



const BoardPage = () => {
    const cards = useSelector(selectPokemonsPlay);
    const dispatch = useDispatch();

    const history = useHistory();
    
    const [board, setBoard] = useState([])
    const [choiceCard, setChoiseCard] = useState(null)
    const [player2, setPlayer2] = useState([])
    const [player1, setPlayer1] = useState(() => {
        return Object.values(cards).map(item => ({
            ...item, 
            possession: 'blue'
        }))
    })
    const [steps, setSteps] = useState(0);
    const [serverBoard, setServerBoard] = useState([0,0,0, 0,0,0, 0,0,0]);
    const [enemySelect, setEnemySelect] = useState(null);
    const [enemyMoveFirst, setEnemyMoveFirst] = useState(true);
    
    const enemyFirst = async () => {
        const params = {
            currentPlayer: 'p2',
            hands: {
              p1: player1,
              p2: player2
            },
            move: null,
            board: serverBoard
          };

        const game = await request.game(params);  

        setSteps(prev => {
                const count = prev + 1;
                return count;
            })

        if(game.move !== null){
            const idAi = game.move.poke.id;
                setTimeout(() => {
                    setPlayer2(prevState => prevState.map(item => {
                        if(item.id === idAi){
                            setEnemySelect(item.id)
                        }
                        return item;
                    }));
                }, 1000);
                    setTimeout(()=>{
                        setPlayer2(() => game.hands.p2.pokes.map(item => item.poke));
                        setServerBoard(game.board);
                        setBoard(returnBoard(game.board));
                        setSteps(prev => {
                            const count = prev + 1;
                            return count;
                        })
                    },1500);
        }

        // }
    }

    useEffect(() => {
        (async function () {
            const boardRequest = await request.getBoard();
            setBoard(boardRequest.data);
            
            const player2Requerst = await request.gameStart({
                pokemons: Object.values(cards)
            })
            
            dispatch(setPokemonsEnemy(player2Requerst.data))
            setPlayer2(() => {
                return player2Requerst.data.map(item => ({
                    ...item,
                    possession: 'red'
                }))
            })

        })()
    }, [])

    useEffect(() => {
        if(player2.length !==0 && enemyMoveFirst){
            setEnemyMoveFirst(Math.round(Math.random()));
            alert(!enemyMoveFirst ? "Your muve is first!" : "AI maves first!");
            enemyFirst();
            setEnemyMoveFirst(false);
            }
    }, [player2])

    if(Object.keys(cards).length === 0){
        history.replace("/game");
    }
    

    const handleClickBoardPlate = async (position) => {
        if(typeof choiceCard === 'object') {
            const params = {
                currentPlayer: 'p1',
                hands: {
                    p1: player1,
                    p2: player2
                },
                move: {
                    poke: {
                        ...choiceCard
                    },
                position
                },
                board: serverBoard
            };

        if(choiceCard.player === 1){
            setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
        }

        setBoard(prevState => prevState.map(item => {
            if(item.position === position){
                return {
                    ...item, 
                    card: choiceCard
                }
            }

            return item;
        }));

        const game = await request.game(params);
        console.log(game);

        setBoard(returnBoard(game.oldBoard))

        setSteps(prev => {
                const count = prev + 1;
                return count;
            })
        
            if(game.move !== null){
                const idAi = game.move.poke.id;

                setTimeout(() => {
                    setPlayer2(prevState => prevState.map(item => {
                        if(item.id === idAi){
                            setEnemySelect(item.id)
                        }
                        return item;
                    }));
                }, 1000);
                setTimeout(()=>{
                    setPlayer2(() => game.hands.p2.pokes.map(item => item.poke));
                    setServerBoard(game.board);
                    setBoard(returnBoard(game.board));
                    setSteps(prev => {
                        const count = prev + 1;
                        return count;
                    })
                },1500);
            }
        }
    }

    useEffect(() => {
        counterWin(board, player1, player2)
        if(steps === 9){
            const [count1, count2] = counterWin(board, player1, player2);

            if(count1 > count2){
                dispatch(setGameStatus());
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
                enemySelect={enemySelect}
                />
            </div>
        </div>
    );
};

export default BoardPage;