import Menu from "../menu"
import NavBar from "../navBar"
import { useState } from "react"
import Modal from "../modal";
import LoginForm from "../loginForm";
import {NotificationManager} from 'react-notifications';
import { useDispatch } from "react-redux";
import { getUserUpdateAsync } from "../../store/user";


const MenuHeader = ({bgActive}) => {
    const [menuState, setMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);
    const [isLogin, setLogin] = useState(true);
    const dispatch = useDispatch();

    const dbLoginFetch = (httpsApi) => {
        return async ({email, password}) => {
            const requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            }
            const response = await fetch(httpsApi, requestOptions).then(res => res.json());
            if(response.hasOwnProperty("error")){
                NotificationManager.error(response.error.message, "Wrong!");
            } else {
                if(!isLogin){
                    const pokemonsStart = await fetch("https://reactmarathon-api.herokuapp.com/api/pokemons/starter").then(res => res.json());
                    console.log("pokemonStart", pokemonsStart);
                    for(const item of pokemonsStart.data){
                        await fetch(`https://pokemon-game-24b59-default-rtdb.asia-southeast1.firebasedatabase.app/${response.localId}/pokemons.json?auth=${response.idToken}`,{
                            method:'POST',
                            body: JSON.stringify(item)
                        })
                    }
                }
                localStorage.setItem("idToken", response.idToken);
                NotificationManager.success("Success message");
                dispatch(getUserUpdateAsync());
                setOpenModal(false)
            }
        }
    }
    
    const toggleMenuActive = () => {
        setMenu(!menuState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    }

    const handleChangeLogin = () => {
        setLogin(prev => !prev);
    }

    const handleSubmitLoginForm = dbLoginFetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s");

    const handleSubmitAuthForm = dbLoginFetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s");
    
    // const handleSubmitLoginForm = async ({email, password}) => {
    //     const requestOptions = {
    //         method: "POST",
    //         body: JSON.stringify({
    //             email,
    //             password,
    //             returnSecureToken: true
    //         })
    //     }
    //     const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s', requestOptions).then(res => res.json());
    //     if(response.hasOwnProperty("error")){
    //         console.log("err")
    //         NotificationManager.error(response.error.message, "Wrong!");
    //     } else {
    //         localStorage.setItem("idToken", response.idToken);
    //         NotificationManager.success("Success message");
    //     }
    //     console.log(response);
    // }

    // const handleSubmitAuthForm = async ({email, password}) => {
    //     const requestOptions = {
    //         method: "POST",
    //         body: JSON.stringify({
    //             email,
    //             password,
    //             returnSecureToken: true
    //         })
    //     }
    //     const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s', requestOptions).then(res => res.json());
    //     if(response.hasOwnProperty("error")){
    //         console.log("err")
    //         NotificationManager.error(response.error.message, "Wrong!");
    //     } else {
    //         localStorage.setItem("idToken", response.idToken);
    //         NotificationManager.success("Success message");
    //         setOpenModal(false);
    //     }
    //     console.log(response);
    // }


    return(
        <>
            <Menu menuActive={menuState} menuTriger={toggleMenuActive}/>
            <NavBar 
                menuActive={menuState} 
                menuTriger={toggleMenuActive} 
                bgActive={bgActive}
                onClickLogin={handleClickLogin}
            />
            <Modal 
                title="Auth..."
                isOpen={isOpenModal}
                onCloseModal={handleClickLogin}>
                <LoginForm 
                    onSubmit={isLogin ? handleSubmitAuthForm : handleSubmitLoginForm}
                    authTypeName={isLogin ? "SIGNIN" : "SIGNUP"}
                    authChangeTo={isLogin ? "Register?" : "Login?"}
                    changeAuth={handleChangeLogin}
                    />
            </Modal>
            
       </> 
    )
}

export default MenuHeader;