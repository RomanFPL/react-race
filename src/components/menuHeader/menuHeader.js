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
            <Menu menuActive={menuState} menuTriger={toggleMenuActive}/>
            <NavBar menuActive={menuState}/>
       </> 
    )
}

export default MenuHeader;