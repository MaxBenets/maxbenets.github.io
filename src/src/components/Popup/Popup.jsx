import { useState } from "react"
import s from "./Popup.module.css"

export const Popup = ({setPopupVisibility}) => {

   const [name, setNameValue] = useState("");
   const [mail, setMailValue] = useState("");
   const [message, setMessageValue] = useState("");

   const hidePopup = () => {
      setPopupVisibility(false)
   }

   return(
      <>
         <div className={s.popupBackground} onClick = {hidePopup}>

         </div>

         <div className={s.popup}>
            <button className={s.close} onClick = {hidePopup}>✕</button>
            <h2 className={s.h2}>Форма Зв'язку</h2>
            <form action="https://www.actionforms.io/e/r/maksim-benec-test" className={s.form}>
               <div className={s.inputBlock}>
                  <p className={s.legend}>Ім'я</p>
                  <input name = "Name" onChange = {(e) => {setNameValue(e.target.value)}} value = {name} type="text" className={s.input} />
               </div>
               <div className={s.inputBlock}>
                  <p className={s.legend}>Поштова скринька</p>
                  <input name = "email" onChange = {(e) => {setMailValue(e.target.value)}} value = {mail} type="email" className={s.input} />
               </div>

               <div className={s.inputBlock}>
                  <p className={s.legend}>Повідомлення</p>
                  <textarea name = "message" type="text" className={s.input} onChange = {(e) => {setMessageValue(e.target.value)}}>{message}</textarea>
               </div>

               <button type={s.submit} className = {s.button}>Надіслати</button>

               <p className={s.callme}>Телефон: <a href="tel:+380964818046">+380 96 481 8046</a></p>
            </form>
         </div>

      </>
   )
}