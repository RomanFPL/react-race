import cn from "classnames";
import s from "./navBar.module.css";

const NavBar = ({menuActive, menuTriger, bgActive}) => {

    return (
        <nav id={s.navbar} className={cn(s.root, {[s.bgActive]: bgActive})}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <div onClick={menuTriger} className={cn(s.menuButton, {[s.active] : menuActive})}>
            <span />
            </div>
        </div>
        </nav>
    )
}

export default NavBar;