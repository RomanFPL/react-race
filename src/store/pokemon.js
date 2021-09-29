import { createSlice } from "@reduxjs/toolkit";
import FirebaseClass from "../services/firebase";

export const slice = createSlice({
    name: "pokemons",
    initialState: {
        isLoading: false,
        data: {},
        error: null,
        pokemonsForPlay: {},
        enemiesPokemons: {},
        gameStatus: 0 
    }, 
    reducers: {
        fetchPokemons: state => ({
            ...state, 
            isLoading: true
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoading: true,
            data: action.payload
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoading: false, 
            data: {},
            error: action.payload
        }),
        setPokemonsPlay: (state, action) => ({
            ...state,
            pokemonsForPlay: action.payload
        }),
        setPokemonsEnemy: (state, action) => ({
            ...state,
            enemiesPokemons: action.payload,
        }),
        setGameStatus: (state) => ({
            ...state,
            gameStatus: 1
        }),
        clearGameState: (state) => ({
            ...state,
            pokemonsForPlay: {},
            enemiesPokemons: {},
            gameStatus: 0 
        })
    }
});

export const {fetchPokemons, 
        fetchPokemonsResolve, 
        fetchPokemonsReject, 
        setPokemonsPlay, 
        setPokemonsEnemy, 
        setGameStatus,
        clearGameState} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export const selectPokemonsPlay = state => state.pokemons.pokemonsForPlay;
export const selectPokemonsEnemies = state => state.pokemons.enemiesPokemons;
export const selectGameStatus = state => state.pokemons.gameStatus;

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons());
    const data = await FirebaseClass.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(data));
}


export default slice.reducer;