import Menu from "../menu"
import NavBar from "../navBar"
import { useState } from "react"

const MenuHeader = () => {
    const [menuState, setMenu] = useState(false);
    const toggleMenuActive = () => {
        setMenu(!menuState);
    }

    return(
        <>
            <NavBar menuActive={menuState} menuTriger={toggleMenuActive}/>
            <Menu menuActive={menuState}/>
       </> 
    )
}

export default MenuHeader;