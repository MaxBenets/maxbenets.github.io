import { loadProjects } from "../../api/api";

const SET_PROJECTS = "SET-PROJECTS";

let initial_state = {
    projects: []
}

const Projects_reducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_PROJECTS:
            return{
                ...state,
                projects: action.projects
            }
        default:
            return state
    }
} 

const setProjectsAC = (projects) => ({
    type: SET_PROJECTS,
    projects
})

export const setProjects = () => {
    return (dispatch) => {
        loadProjects().then(
            (responce) => {
                dispatch(setProjectsAC(responce))
            }
        )
    }
}

export default Projects_reducer