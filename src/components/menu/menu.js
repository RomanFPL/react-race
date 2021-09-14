import cn from "classnames"
import s from "./menu.module.css"

const Menu = ({menuActive}) => {
    return(
    <div className={cn(s.menuContainer, {[s.active]: menuActive}, {[s.deactive]: !menuActive})}>
        <div className={s.overlay}/>
        <div className={s.menuItems}>
            <ul>
            <li>
                <a href="#welcome">
                HOME
                </a>
            </li>
            <li>
                <a href="#game">
                GAME
                </a>
            </li>
            <li>
                <a href="#about">
                ABOUT
                </a>
            </li>
            <li>
                <a href="#contact">
                CONTACT
                </a>
            </li>
            </ul>
        </div>
        </div>
    )
}

export default Menu;