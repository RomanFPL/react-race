import cn from "classnames";
import s from "./navBar.module.css";

import { ReactComponent as LoginSVG } from "../../assets/login.svg";
import { ReactComponent as UserSVG } from "../../assets/user.svg";
import { useSelector } from "react-redux";
import { selectUserID, selectUserLoading } from "../../store/user";
import { Link } from "react-router-dom";

const NavBar = ({menuActive, menuTriger, bgActive, onClickLogin}) => {
    const isLoadingUser = useSelector(selectUserLoading);
    const localId = useSelector(selectUserID);
    console.log(isLoadingUser, localId)
    return (
        <nav id={s.navbar} className={cn(s.root, {[s.bgActive]: bgActive})}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <div className={s.loginAndMenu}>
                {(!isLoadingUser && !localId) && 
                    <div 
                    className={s.loginWrap}
                    onClick={onClickLogin}>
                        <LoginSVG/>
                    </div>
                }
                {(!isLoadingUser && localId) && 
                    <Link 
                    className={s.loginWrap}
                    to="/login">
                        <UserSVG/>
                    </Link>
                }
                <div onClick={menuTriger} className={cn(s.menuButton, {[s.active] : menuActive})}>
                <span />
                </div>  
            </div>
        </div>
        </nav>
    )
}

export default NavBar;