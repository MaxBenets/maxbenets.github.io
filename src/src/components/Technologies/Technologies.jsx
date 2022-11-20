import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import s from "./Technologies.module.css"
import { setTechnologies } from "../../redux/reducers/Technologies_reducer"

export const Technologies = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setTechnologies())
   }, [])

   const technologies = useSelector(state => state.technologies.technologies)

   const mapTehcnologies = technologies.map(t => {
      return (
         <div className={s.item} key = {t.id}>
            <img className={s.img} src={t.imgSrc} alt="" />
            <span className={s.name}>{t.name.toUpperCase()}</span>
         </div>
      )
   })

   return(
      <div className={s.skills+" container"} id = "skills">
         
         <h3 className="h3">ВИКОРИСТОВУЮ ТЕХНОЛОГІЇ</h3>

         <div className={s.skills__flex}>
            {mapTehcnologies}
         </div>

      </div>
   )
}