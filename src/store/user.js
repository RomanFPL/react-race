import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        isLoading: true,
        data: {}
    },
    reducers: {
        fetchUser: () => ({
            isLoading: true,
        }),
        updateUser: (state, action) => ({
            isLoading: false,
            data: action.payload,
        }),
        removeUser: () => ({
            isLoading: false, 
            data: {},
        })

    }
})

export const {fetchUser, updateUser, removeUser} = slice.actions;

export const selectUserLoading = state => state.user.isLoading;
export const selectUser = state => state.user.data;
export const selectUserID = state => state.user.data?.localId;

export const getUserUpdateAsync = () => async dispatch => {
    const idToken = localStorage.getItem('idToken');
    if(idToken){
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                idToken,
            })
        }

        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s", requestOptions).then(res => res.json());

        console.log("### response", response)
        if(response.hasOwnProperty('error')){
            localStorage.removeItem('idToken')
            dispatch(removeUser());
        } else {
            dispatch(updateUser(response.users[0]))
            console.log("### response users", response.users[0])
        }
    } else {
        dispatch(removeUser());
    }
}

export const getUserAsync = () => dispatch => {
    dispatch(fetchUser());
    dispatch(getUserUpdateAsync());
}

export default slice.reducer;