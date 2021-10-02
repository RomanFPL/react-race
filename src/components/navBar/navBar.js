import cn from "classnames";
import s from "./navBar.module.css";

import { ReactComponent as LoginSVG } from "../../assets/login.svg";

const NavBar = ({menuActive, menuTriger, bgActive, onClickLogin}) => {

    return (
        <nav id={s.navbar} className={cn(s.root, {[s.bgActive]: bgActive})}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <div className={s.loginAndMenu}>
                <div 
                className={s.loginWrap}
                onClick={onClickLogin}>
                    <LoginSVG/>
                </div>
                <div onClick={menuTriger} className={cn(s.menuButton, {[s.active] : menuActive})}>
                <span />
                </div>  
            </div>
        </div>
        </nav>
    )
}

export default NavBar;