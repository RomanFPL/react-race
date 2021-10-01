import Menu from "../menu"
import NavBar from "../navBar"
import { useState } from "react"
import Modal from "../modal";
import LoginForm from "../loginForm";
import {NotificationManager} from 'react-notifications';

const MenuHeader = ({bgActive}) => {
    const [menuState, setMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(true);
    const toggleMenuActive = () => {
        setMenu(!menuState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    }

    const handleSubmitLoginForm = async ({email, password}) => {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        }
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s', requestOptions).then(res => res.json());
        if(response.hasOwnProperty("error")){
            console.log("err")
            NotificationManager.error(response.error.message, "Wrong!");
        } else {
            NotificationManager.success("Success message");
        }
        console.log(response);
    }


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
                title="Log in ..."
                isOpen={isOpenModal}
                onCloseModal={handleClickLogin}>
                <LoginForm 
                    onSubmit={handleSubmitLoginForm}/>
            </Modal>
            
       </> 
    )
}

export default MenuHeader;