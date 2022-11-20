import {createStore, combineReducers, applyMiddleware} from "redux"
import Middleware  from "redux-thunk"

import technologies from "./reducers/Technologies_reducer"
import projects from "./reducers/Projects_reducer"
import footer from "./reducers/Footer_reducer"

let reducers = combineReducers({
    technologies, projects, footer,
})

export let store = createStore(reducers, applyMiddleware(Middleware))
window.store = store