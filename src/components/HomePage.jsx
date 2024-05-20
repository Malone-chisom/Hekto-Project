import React, { useContext, useEffect, useState } from "react";
import Home from "./home/Home";
import Navbar from "./general/Navbar";
import { AppContext } from "../context/context";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import '../components/stylespage.css';



function HomePage() {
    const shopContext = useContext(AppContext)
    const { isNavbarOpened, handleOpenNavbar, isHovered, setIsHovered, handleMouseLeave, handleMouseEnter, setProducts } = shopContext;
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res?.data)

                // setTimeout(() => {
                //     setLoading(false)
                // }, 5000);

                // console.log(res?.data)


                setLoading(false)

            })
            .catch(Error)

    }, [])


    // console.log("isNavbarOpened", isNavbarOpened)

    return (
        <div className="">

            {
                loading ?
                    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", flexDirection: "column" }}> <ClipLoader color="#36d7b7" loading={loading} size={80} /> <p>Loading apis...</p>  </div>
                    :
                    <>
                        {
                            isNavbarOpened ?

                                <>
                                    <Navbar handleOpenNavbar={handleOpenNavbar} />
                                    <Home isHovered={isHovered} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} setIsHovered={setIsHovered} />
                                </>
                                :
                                <div>
                                    <Navbar isNavbarOpened={isNavbarOpened} handleOpenNavbar={handleOpenNavbar} />
                                    <Home isHovered={isHovered} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} setIsHovered={setIsHovered} />
                                </div>
                        }

                    </>

            }



        </div>
    )
}
export default HomePage;