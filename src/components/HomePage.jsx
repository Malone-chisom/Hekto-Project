import React, { useContext, useEffect, useState } from "react";
import Home from "./home/Home";
import Navbar from "./general/Navbar";
import { AppContext } from "../context/context";
import axios from "axios";
import { ClipLoader } from "react-spinners";


function HomePage() {
    const shopContext = useContext(AppContext)
    const { isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseLeave, handleMouseEnter, setProducts } = shopContext;
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // setLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res?.data)

                // setTimeout(() => {
                //     setLoading(false)
                // }, 5000);

                // console.log(res?.data)


                // setLoading(false)

            })
            .catch(Error)

    }, [])


    // console.log("isNavbarOpened", isNavbarOpened)

    return (
        <div >

            {
                loading ?
                    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}> <ClipLoader color="#36d7b7" loading={loading} size={100} /> </div>
                    :
                    <>
                        {
                            isNavbarOpened ?

                                <>
                                    <Navbar handleOpenNavbar={handleOpenNavbar} />

                                </>
                                :
                                <>
                                    <Navbar isNavbarOpened={isNavbarOpened} handleOpenNavbar={handleOpenNavbar} />
                                    <Home isHovered={isHovered} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} setIsHovered={setIsHovered} />
                                </>
                        }

                    </>

            }



        </div>
    )
}
export default HomePage;