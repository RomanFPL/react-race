import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemon"
import userReducer from "./user"


export default configureStore({
    reducer: {
        user: userReducer,
        pokemons: pokemonsReducer
    }
})