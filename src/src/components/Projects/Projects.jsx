import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProjects } from "../../redux/reducers/Projects_reducer"
import s from "./Projects.module.css"

import github from "../../img/github.png"

export const Projects = () => {
   const dispatch = useDispatch()

   useEffect(() => { 
      dispatch(setProjects())
   }, [])

   const projects = useSelector(state => state.projects.projects)
   const mapProjects = projects.map(p => (
      <div className={s.item} key = {p.id}>
         <div className={s.about}>
            <a href={p.githubLink} target={"_blank"} className={s.link}>
               <img src={github} alt="" />
            </a>
            <div>
               <a href = {p.url} target = "_blank">
                  <h4>{p.name}</h4>
                  <p>{p.about}</p>
               </a>
            </div>
         </div>
         <img src={p.imgSrc} alt="" />
      </div>
   ))

   return(
      <div className={s.projects} id = "projects">
         <div className={"container "}>
            <h3 className="h3">МОЇ ПРОЄКТИ</h3>
            <div className = {s.flex}>
               {mapProjects}
            </div>
            <div className={s.more}>
               <a href = "https://maxbenets-projects.netlify.app">Більше проєктів тут</a>
            </div>
         </div>
      </div>
   )
}