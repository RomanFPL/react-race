import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { plusAction } from "../../store/counter";
import s from "./header.module.css"

const Header = ({title, descr}) => {
    const hist = useHistory();
    const count = useSelector((state) => state.value)
    const dispatch =  useDispatch(plusAction)
    console.log("Count", count)
    const handleClick = () => {
        // hist.push("game")
        dispatch(plusAction(1));
    }
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                <h1>{title}</h1>    
                <p>{descr}</p>
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;