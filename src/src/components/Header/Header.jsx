import s from "./Header.module.css"

export const Header = () => {
   return(
      <header className={s.header}>
         <div className={s.item}>
            <h1 className={s.h1}>Привіт, мене звати Максим.</h1>
            <p className={s.about}>
               Я - IT спеціаліст, Front-end розробник. 
               Спеціалізуюсь на розробці веб сайтів. Написанні логіки, та верстки. В основному використовую бібліотеку: React.js разом з state бібліотекою Redux.js.
            </p>
            <p className={s.p}>
               Окрім того, я займаюсь викладанням з програмування. Моя ціль - допомогти людям зробити свій перший крок в IT сферу, та навчити працювати з сучасними технологіями.
            </p>
         </div>
         <div className={s.item}>
            <img className={s.img} src="https://avatars.githubusercontent.com/u/98233906?v=4" alt="" />
         </div>

      </header>  
   )
}