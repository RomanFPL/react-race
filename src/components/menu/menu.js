import cn from "classnames"
import s from "./menu.module.css"
import { Link } from "react-router-dom"


const MENU = [
    {
        title: "HOME",
        to: "/"
    },
    {
        title: "GAME",
        to: "/game"
    },
    {
        title: "ABOUT",
        to: "/about"
    },
    {
        title: "CONTACT",
        to: "/contact"
    },
]

const Menu = ({menuActive, menuTriger}) => {
    return(
    <div className={cn(s.menuContainer, 
            {[s.active]: menuActive === true}, 
            {[s.deactive]: menuActive === false}
            )}>
        <div className={s.overlay}/>
        <div className={s.menuItems}>
            <ul>
            {MENU.map((elem, i) => (
                <li key={i} onClick={menuTriger}>
                    <Link to={elem.to}>
                    {elem.title}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
        </div>
    )
}

export default Menu;