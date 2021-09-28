export const plusAction = (amound) => {
    return {
        type: "PLUS",
        payload: amound
    };
}

export const minusAction = (amound) => {
    return {
        type: "PLUS",
        payload: amound
    };
}

const counter = (state = {value: 0}, action) => {
    switch(action.type){
        case "PLUS":
        return {
            ...state,
            value: state.value + action.payload 
        }
        case "MINUS":
            return {
                ...state,
                value: state.value - action.payload,
            }
        default:
            return state;
    }
}

export default counter;