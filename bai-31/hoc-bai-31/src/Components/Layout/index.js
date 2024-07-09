import Header from '../Header';
import {createContext} from 'react';
export const MenuContext = createContext();
function Layout() {

    const menus = [
        "Trang chu",
        "Tinh Tuc",
        "Lien He",
        "Gioi Thieu",
        "Tin Tuc 1",
        "Tin Tuc 2",
        "Tin Tuc 3",
        "Tin Tuc 4",
        "Tin Tuc 5"
    ]

    return(
        <>
        <MenuContext.Provider value={menus}>
        <Header/>
        </MenuContext.Provider>
        
        <div>Main</div>
        <div>Footer</div>       
        </>
    )
}

export default  Layout ;