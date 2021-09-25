import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { PokemonContext } from "../../services/pokemonContext";
import BoardPage from "./routes/board";
import FinishPage from "./routes/finish";
import StartPage from "./routes/start";

const GamePage = () => {    
    const match = useRouteMatch();

    const [pokemons, setPokemons] = useState({});
    const [pokemonsEnemy, setpokemonsEnemy] = useState({});
    const [playStatus,  setPlayStatus] = useState(0);
    
    return (
        <PokemonContext.Provider 
        value={{
            pokemons,
            pokemonsEnemy,
            playStatus,
            addSelectedCard: setPokemons,
            addEnemyCards: setpokemonsEnemy,
            setGameStatus: setPlayStatus
            }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />1
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;