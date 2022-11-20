import s from "./Footer.module.css"

import logo from "../../img/logo.png"

import instagram from "../../img/media/insatgram.png"
import github from "../../img/media/github.png"
import linkedin from "../../img/media/linkedin.png"
import mail from "../../img/media/mail.png"
import telegram from "../../img/media/telegram.png"

import totop from "../../img/totop.png"

import { useState, useRef } from "react"

export const Footer = () => {
   const totopRef = useRef()

   const [media] = useState([
      {id: 0, img: instagram, link: "https://www.instagram.com/maxbenets.web/"},
      {id: 1, img: github, link: "https://github.com/maxbenets"},
      {id: 2, img: linkedin, link: "https://www.linkedin.com/in/maksym-benets-90867a215/"},
      {id: 3, img: mail, link: "https://mailto:maksimbenets@gmail.com/"},
      {id: 4, img: telegram, link: "https://t.me/maxbenets"},
   ])

   const mapMedia = media.map(m => {
      return <a key = {m.id} className = {s.mediaitem} href={m.link}>
         <img src={m.img} alt="" />
      </a>
   })

   const totopFunc = () => {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
   }

   return(
      <footer className={s.footer}>
         <div className={"container "+s.flex}>
            <div className={s.item}>
               <div>
                  <h3 className={s.h3}>Мої контакти</h3>
                  <div className={s.media}>
                     {mapMedia}
                  </div>
                  <span className={s.phone} onClick = {() => {navigator.clipboard.writeText("+380964818046")}}>+380 96 481 8046</span>
               </div>
            </div>
            <div className={s.item}>
               <div className={s.totop}>
                  <img ref = {totopRef} onClick={totopFunc} src={totop} alt="" />
                  <h4>Максим Бенець</h4>
                  <p>Front-end розробник і просто хорoша людина</p>
               </div>
            </div>
         </div>
      </footer>
   )
}