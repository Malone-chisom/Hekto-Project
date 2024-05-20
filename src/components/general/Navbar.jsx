import { useContext, useEffect, useRef, useState } from "react"
import {
    BsEnvelope, BsSearch
} from "react-icons/bs"

import {
    BiPhoneCall
} from "react-icons/bi"

import {
    CiUser
} from "react-icons/ci"
import {
    FaTimes, FaBars
} from "react-icons/fa"
import {
    MdCancel
} from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart, } from "react-icons/bs"
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/context"
import HomePage from "../HomePage"



function Navbar({ isNavbarOpened }) {
    const navRef = useRef(null);
    const navigate = useNavigate()

    // const shopContext = useContext(AppContext);
    // const { count } = shopContext


    const showNavbar = () => {
        console.log("navRef.current", navRef.current)
        navRef.current.classList.toggle('responsive_nav');
    };

    const handleNavigate = (url) => {
        navigate(`/${url}`)
    }


    const handleNavgate = (page) => {
        navigate(page)
    }

    const shopContext = useContext(AppContext)
    const { cartItems, count, setCount, handleOpenNavbar } = shopContext
    console.log("count", count)

    const handleDecreasedQuantity = () => {
        if (count - 1) {
            setCount(count - 1)
        }
    }

    const handleIncreaseQuantity = () => {
        if (count > 1) {
            setCount(count + 1)
        }
    }

    return (
        <div className="home container">

            <div className="nav-container">
                <div className="navbar-top-box">
                    <div className="padding-horizontal navbar-top font-normal text-white">
                        <div className="navbar-top-left">
                            <div className="navbar-top-left-1">
                                <h1  >Hekto</h1 >
                                <div className="navbar-icon-margin-right">

                                    <BsEnvelope />

                                    <span>
                                        Johnsonmalone007@mail.com
                                    </span>
                                </div>

                            </div>
                            {/* <div className="navbar-top-left-2">
                                <div className="navbar-icon-margin-right">
                                    <BiPhoneCall />

                                </div>
                                <span>
                                    08029915141
                                </span>
                            </div> */}
                        </div>
                        <div className="navbar-top-right" ref={navRef}>
                            <div className="display-small-screen" >
                                <li onClick={() => handleNavigate("home")}>Home </li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Services</a></li>
                            </div>
                            <div className="navbar-top-right-1">
                                <div className=" navbar-top-right-child">Login</div>
                                <span className="navbar-icon">
                                    <CiUser />
                                </span>
                            </div>
                            <div className="navbar-top-right-2">
                                <div className=" navbar-top-right-child">
                                    Wishlist
                                </div>
                                <span className="navbar-icon">
                                    <AiOutlineHeart />
                                </span>
                            </div>
                            <div className="navbar-top-right-3"  >
                                <span className="navbar-top-right-child" onClick={() => handleNavigate('cart')} style={{ position: "relative" }}>
                                    <BsCart />
                                    <span style={{ position: "absolute", top: "-7px" }}>{cartItems.length}</span>
                                </span>
                            </div>
                            {/* <button className="nav-btn nav-close-btn" onClick={handleOpenNavbar}> */}
                            {/* <button className="nav-btn nav-close-btn">
                                <FaTimes />
                            </button> */}
                        </div>
                        {/* <div className="navbar-top-right" ref={navRef}>
                            <NavbarMobile />
                        </div> */}
                        {/* <button className="nav-btn" onClick={handleOpenNavbar}> */}
                        <button className="nav-btn" onClick={() => {
                            showNavbar()
                            // handleOpenNavbar()
                        }}>
                            {
                                isNavbarOpened ? <MdCancel /> : <FaBars />
                            }

                        </button>
                    </div>
                </div>
                <div className="padding-horizontal navbar-bottom">

                    <div className="navbar-bottom-1" >

                        <span className="navbar-logo" onClick={() => handleNavigate("home")}>
                            Hekto
                        </span>

                    </div>
                    <div className="navbar-bottom-2">
                        <a className="navbar-menue-item" href="#home">Home</a>
                        <div className="navbar-menue-item navbar-menue-item-left" > <a href="#products" >Products</a></div>
                        {/* <div className="navbar-menue-item navbar-menue-item-left"><a href="#latestproducts"></a>Shop</div> */}
                        {/* <div className="navbar-menue-item navbar-menue-item-left"></div> */}
                        <div className="navbar-menue-item navbar-menue-item-left" > <a href="#trending">Trending</a></div>

                    </div>
                    <div className="navbar-bottom-3">
                        <div className="search-box">
                            <input type="text" name="" />
                            <div className="search-box-icon" >
                                <a href="" style={{ color: "white" }}><BsSearch /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
export default Navbar;