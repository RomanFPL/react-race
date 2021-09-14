import cn from "classnames";
import s from "./navBar.module.css";

const NavBar = ({menuActive, menuTriger}) => {
    const toggleMenuIcon = () => {
        menuTriger && menuTriger();
        console.log(menuActive);
    }
    return (
        <nav className={s.root}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <a onClick={toggleMenuIcon} className={cn(s.menuButton, {[s.active] : menuActive})}>
            <span />
            </a>
        </div>
        </nav>
    )
}

export default NavBar;