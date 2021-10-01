import Menu from "../menu"
import NavBar from "../navBar"
import { useState } from "react"
import Modal from "../modal";

const MenuHeader = ({bgActive}) => {
    const [menuState, setMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);
    const toggleMenuActive = () => {
        setMenu(!menuState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
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
                Some text...
            </Modal>
            
       </> 
    )
}

export default MenuHeader;