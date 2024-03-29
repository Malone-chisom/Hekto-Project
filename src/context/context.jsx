import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
    const [isHovered, setIsHovered] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(cartItems.length)

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

    const handleRemoveProductFromCart = (productId) => {

        const updatedCart = cartItems.filter(item => item.id !== productId)

        setCartItems(updatedCart)

    }



    return (
        <AppContext.Provider value={{ handleRemoveProductFromCart, isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave, cartItems, setCartItems, getApis, products, setProducts, count, setCount }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;