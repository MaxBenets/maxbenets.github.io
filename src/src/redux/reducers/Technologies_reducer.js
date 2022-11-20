import { loadTechnologies } from "../../api/api";

const SET_TECHNOLOGIES = "SET_TECHNOLOGIES";

let initial_state = {
    technologies: []
}

const technologies_reducer = (state = initial_state, action) => {
    switch (action.type){
        case SET_TECHNOLOGIES:
            return{
                ...state,
                technologies: action.technologies
            }
        default:
            return state
    }
}

const setTechnologiesAC = (technologies) => ({
    type: SET_TECHNOLOGIES,
    technologies
})

export const setTechnologies = () => {
    return(dispatch) => {
        loadTechnologies().then((responce) => {
            dispatch(setTechnologiesAC(responce))
        })
    }
}

export default technologies_reducer