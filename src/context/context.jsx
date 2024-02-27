import { createContext, useState } from "react";

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


    return (
        <AppContext.Provider value={{ isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave  }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;