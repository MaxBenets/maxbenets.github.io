import { loadRecomendations } from "../../api/api";

const SET_RECOMENDATIONS = "SET_RECOMENDATIONS";

let initial_state = {
    recomendations: []
}

const Footer_reducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_RECOMENDATIONS: 
            return{
                ...state,
                recomendations: action.recomendations
            }
        default:
            return state
    }
}

const setRecomendationAC = (recomendations) => {
    return{
        type: SET_RECOMENDATIONS,
        recomendations
    }
}

export const setRecomendation = () => {
    return (dispatch) => {
        loadRecomendations().then( res => {
            dispatch(setRecomendationAC(res))
        })
    }
}

export default Footer_reducer