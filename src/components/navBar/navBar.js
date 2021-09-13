import cn from "classnames";
import s from "./navBar.module.css";
import {useState} from "react";

const NavBar = () => {
    const [state, setState] = useState(false);
    const toggleMenuIcon = () => {
        setState(!state);
    }
    return (
        <nav className={s.root}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <a onClick={toggleMenuIcon} className={cn(s.menuButton, {[s.active] : state})}>
            <span />
            </a>
        </div>
        </nav>
    )
}

export default NavBar;