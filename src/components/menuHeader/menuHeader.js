import Menu from "../menu"
import NavBar from "../navBar"
import { useState } from "react"

const MenuHeader = ({bgActive}) => {
    const [menuState, setMenu] = useState(null);
    const toggleMenuActive = () => {
        setMenu(!menuState);
    }

    return(
        <>
            <Menu menuActive={menuState}/>
            <NavBar menuActive={menuState} menuTriger={toggleMenuActive} bgActive={bgActive}/>
       </> 
    )
}

export default MenuHeader;