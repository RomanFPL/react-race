import cn from "classnames"
import s from "./menu.module.css"


const MENU = [
    {
        title: "HOME",
        to: "#welcome"
    },
    {
        title: "GAME",
        to: "#game"
    },
    {
        title: "ABOUT",
        to: "#about"
    },
    {
        title: "CONTACT",
        to: "#contact"
    },
]

const Menu = ({menuActive}) => {
    return(
    <div className={cn(s.menuContainer, 
            {[s.active]: menuActive === true}, 
            {[s.deactive]: menuActive === false}
            )}>
        <div className={s.overlay}/>
        <div className={s.menuItems}>
            <ul>
            {MENU.map((elem, i) => (
                <li key={i}>
                    <a href={elem.to}>
                    {elem.title}
                    </a>
                </li>
            ))}
            </ul>
        </div>
        </div>
    )
}

export default Menu;