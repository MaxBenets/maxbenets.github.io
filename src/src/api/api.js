import * as axios from "axios"

let instance = axios.create({
    baseURL: "https://maxbenets.github.io/data.json"
})

export const loadTechnologies = () => {
    return instance.get().then(
        res => {
            return res.data.technologies
        }
    )
}
export const loadProjects = () => {
    return instance.get().then(
        res => {
            return res.data.projects.splice(0, 4)
        }
    )
}

export const loadRecomendations = () => {
    return instance.get().then(
        res => {
            return res.data.recomendation
        }
    )
}