import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
    const [isHovered, setIsHovered] = useState(false)


    const handleOpenNavbar = () => {
        setIsNavbarOpened(!isNavbarOpened)
        console.log("isNavbarOpened", isNavbarOpened)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const getApis = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.Console(json))
    }

    return (
        <AppContext.Provider value={{ isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave, getApis }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;