import Menu from "../menu"
import NavBar from "../navBar"
import { useState } from "react"
import Modal from "../modal";
import LoginForm from "../loginForm";

const MenuHeader = ({bgActive}) => {
    const [menuState, setMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(true);
    const toggleMenuActive = () => {
        setMenu(!menuState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    }

    const handleSubmitLoginForm = (values) => {
        console.log("### vl", values)
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