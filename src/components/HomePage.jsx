import React, { useContext, useEffect, useState } from "react";
import Home from "./home/Home";
import Navbar from "./general/Navbar";
import { AppContext } from "../context/context";
import axios from "axios";
import { ClipLoader } from "react-spinners";


function HomePage() {
    const shopContext = useContext(AppContext)
    const { isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseLeave, handleMouseEnter } = shopContext;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false)
                }, 5000);

                console.log(res?.data)
                // setProducts(res.data)
            })
            .catch(Error)
    }, [])


    console.log("isNavbarOpened", isNavbarOpened)

    return (
        <div className="">

            {
                loading ?
                    <ClipLoader color="#36d7b7" loading={loading} size={100} />
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