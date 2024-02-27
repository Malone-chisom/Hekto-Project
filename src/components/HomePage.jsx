import React, { useContext, useEffect } from "react";
import Home from "./home/Home";
import Navbar from "./general/Navbar";
import { AppContext } from "../context/context";


function HomePage() {
    const shopContext = useContext(AppContext)
    const { isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseLeave, handleMouseEnter } = shopContext

    console.log("isNavbarOpened", isNavbarOpened)

    return (
        <div>

            {
                isNavbarOpened ?

                    <>
                        <Navbar handleOpenNavbar={handleOpenNavbar} />
                        {/* <Home /> */}
                    </> 
                    :
                    <>
                        <Navbar isNavbarOpened={isNavbarOpened} handleOpenNavbar={handleOpenNavbar} />
                        <Home isHovered={isHovered} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} setIsHovered={setIsHovered} />
                    </>
            }

        </div>
    )
}
export default HomePage;