import s from "./Nav.module.css"

import logo from "../../img/logo.png"

export const Nav = ({openedMenu, setOpenedMenu}) => {

   const BurgerMenuClick = () => {
      if (openedMenu){setOpenedMenu(false)}
      else{setOpenedMenu(true)}
   }

   return(
      <nav className={s.nav}>
         <div className={"container " + s.flex}>
            <div className={s.item + " " + s.sitename}>
               <img className={s.logo} src={logo} alt="" />
               <p className={s.name}>MaxBenets</p>
            </div>
            <div className={s.item + " " + s.menu}>
               <div className={s.burger} onClick = {BurgerMenuClick}>
                  <span className={openedMenu && s.openedMenu}></span>
                  <span className={openedMenu && s.openedMenu}></span>
                  <span className={openedMenu && s.openedMenu}></span>
               </div>
            </div>
         </div>
      </nav>
   )
}