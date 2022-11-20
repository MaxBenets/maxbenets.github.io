import s from "./Menu.module.css"

export const Menu = ({openedMenu, setPopupVisibility, setOpenedMenu }) => {
   return(
      <>
         <div className={ openedMenu ? s.menu + " " + s.opened : s.menu}>
            <a href = "#skills" className={s.item}>НАВИЧКИ</a>
            <a href = "#projects" className={s.item}>ПРОЄКТИ</a>
            <p className={s.item} onClick = {() => {setPopupVisibility(true); setOpenedMenu(false)}}>ЗВ'ЯЗАТИСЬ ЗІ МНОЮ</p>
            <a href = "https://prytulafoundation.org/uk" target={"_blank"} className={s.item}>ДОПОМОГТИ ЗСУ</a>
         </div>

         <div className={openedMenu ? s.closeMenu + " " + s.showHideMenu : s.closeMenu} onClick = {() => {setOpenedMenu(false)}}></div>

      </>
   )
}