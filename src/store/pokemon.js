import { createSlice } from "@reduxjs/toolkit";
import FirebaseClass from "../services/firebase";

export const slice = createSlice({
    name: "pokemons",
    initialState: {
        isLoading: false,
        data: {},
        error: null
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
        getPokemons: (state, action) => ({
            ...state,
            data: action.payload
        })
    }
});

export const {getPokemons, fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons());
    const data = await FirebaseClass.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(data));
}


export default slice.reducer;