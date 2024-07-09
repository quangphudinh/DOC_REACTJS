import { useContext } from "react";
import { MenuContext } from "../Layout";
function Menu() {

    const menus = useContext(MenuContext);
    
    console.log(menus);
    return(
        <>
            <ul>
                {menus.map((item) => (
                    <li key={item}>{item}</li>
                ))}
                 
            </ul>
        </>
    )
}

export default Menu;