import cn from "classnames";
import s from "./navBar.module.css"

const NavBar = () => {
    return (
        <nav className={s.root}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <a className={cn(s.menuButton, s.active)} href>
            <span />
            </a>
        </div>
        </nav>
    )
}

export default NavBar;