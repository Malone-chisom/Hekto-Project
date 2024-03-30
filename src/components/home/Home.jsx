import { useContext, useEffect, useState } from "react";
import image30 from "../../pictures/image30.png"
import image1162 from "../../pictures/image1162.png";
import image1161 from "../../pictures/image1161.png";
import image31 from "../../pictures/image 31.png"
import image1170 from "../../pictures/image1170.png";
import image1171 from "../../pictures/image 1171@2x.png"
import homesofan from "../../pictures/home-sofa.png"
import Ellipse from "../../pictures/Ellipse.png"
import "../../styles/general/navbar.scss";
import "../../styles/home/section_1.scss";
// import Navbar from "../general/Navbar";
import lamp from "../../pictures/image32.png";
import GroupCicle from "../../pictures/Group-cicle.png";
import sofaChair from "../../pictures/Shell-Shaped-Armchair-Pink.png";
import section2image1 from "../../pictures/section-2-image-1.png";
import section2image2 from "../../pictures/section-2-image-2.png";
import section2image3 from "../../pictures/section-2-image-3.png";
import section2image4 from "../../pictures/section-2-image-4.png";
import image1166 from "../../pictures/image1166.png";
import image111 from "../../pictures/image111.png";
import image22 from "../../pictures/image22.png";
import image23 from "../../pictures/image23.png";
import freedelivery from "../../pictures/free-delivery.png";
import cashback from "../../pictures/cashback.png";
import premiumquality from "../../pictures/premium-quality.png";
import hourssupport from "../../pictures/24-hours-support.png"
import "../global-Style/Globalstyle.css"
import { AppContext } from "../../context/context";
import axios from "axios";
import FooterComponent from "../footer/Footer";
import Swal from "sweetalert2";


function Home({ isHovered, handleMouseLeave, handleMouseEnter }) {
    const getContext = useContext(AppContext)
    const { getApis } = getContext
    // const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    // const [cartItems, setCartitems] = useState([])


    const shopContext = useContext(AppContext);
    const { products, setProducts, cartItems, setCartItems, count } = shopContext
    // console.log("cart", cartItems)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
                console.log(' API products', products)

            })
            .catch(Error => {
                console.log(Error)
            })
    }, [])

    function handleAddToCart(product) {
        console.log('product', product)
        const index = cartItems.findIndex((item) => item.id === product.id);

        if (index !== -1) {
            console.log("cart item exists, so qty increased")
            cartItems[index].qty++;

            Swal.fire({
                title: "Cart",
                text: "Product added to cart successfully!",
                icon: 'success'
            })
        } else {
            console.log("Newly added to cart")

            cartItems.push({ ...product, qty: 1 })
            Swal.fire({
                title: "Cart",
                text: "Product added to cart successfully!",
                icon: 'success'
            })
        }
        console.log("cartItems", cartItems)
    }



    // console.log("isHovered", isHovered)
    // console.log("handleMouseLeave", handleMouseLeave)
    // console.log(getApis)



    return (



        <div className="home">

            {/* Section-1/Hero starts  */}
            <div className="section-1-container">
                <div className="padding-horizontal padding-vertical">
                    <div className="section-1">
                        <div className="section-1-left">
                            <div className="section-1-left-content">
                                <div className="section-1-left-content-box-1">
                                    <span className="section-1-left-content-text-1">Best Furniture for your Castle</span>
                                </div>
                                <div  >
                                    <h1 className="section-1-left-content-heading general-font-size">
                                        New Furniture Collection Trends in 2023
                                    </h1>
                                </div>
                                <div className="section-1-left-content-box-3" >
                                    <span className="section-1-left-content-text-3">
                                        Award wining brand global brand for Furniture in th world,  we devliver every part of
                                        nigeria and abroad
                                    </span>
                                </div>
                                <h4>

                                </h4>
                                <button className="section-1-left-btn"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ backgroundColor: isHovered ? "red" : "#FB2E86" }}

                                >
                                    Shop Now
                                </button>

                            </div>

                        </div>
                        <div className="section-1-right">
                            <div className="section-1-right-background">

                                <img src={sofaChair} className="sofa" width="100%" alt="chair" />
                                <div className="group-circle">
                                    <img src={GroupCicle} className="pink-circle" alt="cicle" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <span className="section-1-left-lamp">
                    <img src={lamp} className="lamp-size" alt="lamp" />
                </span>
            </div>

            {/* Section-1/Hero ends  */}

            {/* Section-2/ Starts */}
            <div className="section-2-container">
                <div className="padding-horizontal">
                    <div className="section-2">
                        <div className="section-heading">
                            <span>Featured Products</span>
                        </div>
                        <div className="section-2-box-container">
                            {/* {
                                products.length > 0 ?
                                    products.map((item) => (
                                        <div className="section-2-box box-container-for-items">
                                            <div className="box-container-for-items-image">
                                                <div className="inner-box-container-for-items-image">
                                                    <img src={item?.image || section2image1} id="px" alt="chair" />
                                                </div>
                                            </div>
                                            <div className="box-container-text-container">
                                                <div>{item?.title}</div>
                                                <div className="dash-container">
                                                    <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                                    <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                                    <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                                </div>
                                                <div>{item?.category}</div>
                                                <div>${item?.price}</div>
                                            </div>
                                        </div>
                                    )) : "No products..."
                            } */}

                            <div key={products.id} className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={products[2]?.image || section2image2} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div> {products[2]?.title || "Cantila chair"}</div>
                                    <div className="dash-container" style={{ margin: "9px" }}>
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div>{products[2]?.price || "$42.00"}</div>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[2])} > add to cart</button>
                                    </div>
                                </div>
                            </div>

                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={products[1]?.image || section2image2} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container" >
                                    <div> {products[1]?.title || "Cantila chair"}</div>
                                    <div className="dash-container" style={{ margin: "7px" }}>
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div>{products[1]?.price || "$42.00"}</div>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[1])}> add to cart</button>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={products[3]?.image || section2image3} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div> {products[3]?.title || "Cantila chair"}</div>
                                    <div className="dash-container" style={{ margin: "9px" }}>
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div> {products[3]?.price || "$42.00"}</div>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[3])}> add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={products[4]?.image || section2image4} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div> {products[4]?.title || "Cantila chair"} </div>
                                    <div className="dash-container" style={{ margin: "5px" }}>
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    {/* <div>Code - Y523201</div> */}
                                    <div>{products[4]?.price || "$42.00"}</div>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section-2/ Ends */}

            {/* Section-3 Starts here */}
            <div className="section-3-container" id="products">
                <div className="padding-horizontal">
                    <div className="section-3">
                        <div>
                            <div className="section-heading">
                                <span>
                                    Latest Porducts
                                </span>
                            </div>
                            <div className="section-3-links sub-section-headers">
                                <div className="">New Arival</div>
                                <div>Best Seller</div>
                                <div>Featured</div>
                                <div>Special offer</div>
                            </div>
                            <div className="section-3-content">
                                <div className="overall-image-box-container">
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box image-box-option ">
                                                <img src={products[5]?.image || image1166} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text" >
                                            <div>
                                                <span>{products[5]?.title || "Cafty Handy"}</span>
                                            </div>
                                            <div style={{ margin: "10px 0" }}>
                                                <span> {products[5]?.price || "$42.00"}</span>
                                                <span></span>
                                            </div>
                                            <div className="adbutton">
                                                <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box image-box-option ">
                                                <img src={products[6]?.image || image111} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span> {products[6]?.title || "Cafty Handy"}</span>
                                            </div>
                                            <div style={{ margin: "12   px 0" }}>
                                                <span>{products[6]?.pice || "42.00"}</span>
                                            </div>
                                            <div className="adbutton">
                                                <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container" >
                                            <div className="inner-image-box image-box-option  ">
                                                <img src={products[8]?.image || image22} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span> {products[8]?.title || "Cafty Handy"} </span>
                                            </div>
                                            <div style={{ margin: "7px 0" }}>
                                                <span>{products[8]?.price || "$42.00"}</span>
                                                <span></span>
                                            </div>
                                            <div className="adbutton">
                                                <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overall-image-box-container">
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box image-box-option ">
                                                <img src={products[9]?.image || image23} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span> {products[9]?.title || "Cafty Handy"}</span>
                                            </div>
                                            <div style={{ margin: "10px 0" }}>
                                                <span> {products[9]?.price || "$42.00"}</span>
                                            </div>
                                            <div className="adbutton">
                                                <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box image-box-option ">
                                                <img src={products[10]?.image || image22} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span> {products[10]?.title || "Cafty Handy"} </span>
                                            </div>
                                            <div style={{ margin: "2px 0" }}>
                                                <span> {products[10]?.price || "$42.00"}</span>
                                                <span></span>
                                            </div>
                                            <div className="adbutton">
                                                <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box image-box-option  ">
                                                <img src={products[11]?.image || section2image4} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span> {products[11]?.title || "Cafty Handy"}</span>
                                            </div>
                                            <div style={{ margin: "2px 0" }}>
                                                <span> {products[11]?.price || '$42.00'} </span>
                                                <span></span>
                                            </div>
                                            <div className="adbutton">
                                                <button className="cart-button" onClick={() => handleAddToCart(products[4])}> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section-3 Ends Here */}

            {/* section-4 Starts Here */}

            <div className="section-4-container">
                <div className="padding-horizontal">
                    <div className="section-4">
                        <div className=" section-heading">
                            <span>What Shopex Offer!</span>
                        </div>
                        <div className="section-4-flex">
                            <div className="section-4-flex-box">
                                <div className="inner-section-4-flex-box">
                                    <div className="section-4-flex-center">
                                        <div className="section-4-flex-box-icon">
                                            <img src={freedelivery} alt="chair" />
                                        </div>
                                    </div>
                                    <div className="section-4-padding-vertical">
                                        <span>24/7 support</span>
                                    </div>
                                    <div className="section-4-flex-center">
                                        <div className=" section-4-lorem">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-4-flex-box">
                                <div className="inner-section-4-flex-box">
                                    <div className="section-4-flex-center">
                                        <div className="section-4-flex-box-icon">
                                            <img src={cashback} alt="chair" />
                                        </div>
                                    </div>

                                    <div className="section-4-padding-vertical">
                                        <span>24/7 support</span>
                                    </div>
                                    <div className="section-4-flex-center">
                                        <div className="section-4-lorem">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-4-flex-box">
                                <div className="inner-section-4-flex-box">
                                    <div className="section-4-flex-center">
                                        <div className="section-4-flex-box-icon">
                                            <img src={premiumquality} alt="chair" />
                                        </div>
                                    </div>
                                    <div className="section-4-padding-vertical">
                                        <span>24/7 support</span>
                                    </div>
                                    <div className="section-4-flex-center">
                                        <div className="section-4-lorem" >
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-4-flex-box">
                                <div className="inner-section-4-flex-box">
                                    <div className="section-4-flex-center">
                                        <div className="section-4-flex-box-icon">
                                            <img src={hourssupport} alt="chair" />
                                        </div>
                                    </div>
                                    <div className="section-4-padding-vertical">
                                        <span>24/7 support</span>
                                    </div>
                                    <div className="section-4-flex-center">
                                        <div className="section-4-lorem">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* section-4 Ends Here */}

            {/* section 5 Starts Here */}

            <div className="section-5-container">
                <div className="smaller-padding-horizontal">
                    <div className="section-5">
                        <div className="section-5-left">
                            <div className="ellips-container">
                                <img src={Ellipse} className="ellipse" alt="Ellipse" />

                                <div className="sofa-container">
                                    <img src={homesofan} className="homesofa" alt="homesofan" />
                                </div>
                            </div>
                        </div>
                        <div className="section-5-right">
                            <div className="inner-section-5-right">
                                <h2 className="headers">
                                    Unique Features Of Latest & Trebding products
                                </h2>

                                <ul>
                                    <li>All frames constructed with hardwood solids and laminates</li>
                                    <li style={{}}>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
                                    <li>Arms, backs and seats are structurally reinforced</li>
                                </ul>

                                <div className="section-5-cart">
                                    <button style={{ color: "white" }}> Add to cart</button>
                                    <p className="" style={{ marginLeft: "10px", fontWeight: "500" }}>
                                        B&B Italian Sofa
                                        $32.22
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* sectin 5 ends here */}

            {/* section 6 starts here */}

            <div className="section-6-container">
                <div className="padding-horizontal">
                    <div className="section-6">
                        <div className="section-6-heading">
                            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Trending</h1>
                        </div>
                        <div className="section-6-content">
                            <div className="section-6-img-container">
                                <div className="inner-image-box-container">
                                    <div className="inner-section-6-img-container ">
                                        <img className="sec6img caftypic" src={products[9]?.image || image1171} alt="image1171" />
                                    </div>
                                </div>

                                <div className="section-6-img-containertext-box">
                                    <p> {products[550]?.title || "Sandisk SSD Plus 1TB International SSD SATA ||| 6"} </p>
                                    <pre style={{ fontSize: "11px" }}>{products[9]?.price}</pre>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[2])} > add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="section-6-img-container">
                                <div className="inner-image-box-container">
                                    <div className="inner-section-6-img-container  ">
                                        <img className="sec6img caftypic" src={products[13]?.image || image1170} alt="image1171" />
                                    </div>
                                </div>

                                <div className="section-6-img-containertext-box">
                                    <p> {products[50]?.title || "Samsung 49-inch CHG90 Curved Gaming Monitor"}</p>
                                    <pre style={{ fontSize: "11px" }}>{products[9]?.price}</pre>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[2])} > add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="section-6-img-container">
                                <div className="inner-image-box-container">
                                    <div className="inner-section-6-img-container">
                                        <img className="sec6img caftypic" src={products[18]?.image || image31} alt="image1171" />
                                    </div>
                                </div>

                                <div className="section-6-img-containertext-box">
                                    <p> {products[18]?.title || 'Cantilever chair'}</p>
                                    <pre style={{ fontSize: "11px" }}>{products[18]?.price}</pre>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[2])} > add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="section-6-img-container">
                                <div className="inner-image-box-container">
                                    <div className="inner-section-6-img-container">
                                        <img className="sec6img caftypic" src={products[17]?.image || image22} alt="image1171" />
                                    </div>
                                </div>

                                <div className="section-6-img-containertext-box ">
                                    <p> {products[17]?.title || "Cantilever chair"}</p>
                                    <pre style={{ fontSize: "11px" }}>{products[17]?.price}</pre>
                                    <div className="adbutton">
                                        <button className="cart-button" onClick={() => handleAddToCart(products[2])} > add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* section 6 sub */}
                    <div className="section-6-sub">
                        <div className="section-6-sub-1" style={{ backgroundColor: "#FFF6FB" }}>
                            <p>23% off in all products</p>
                            <p style={{ color: "#FB2E86" }}>Shop Now</p>
                            <div className="section-6-img" style={{ padding: "0" }}>
                                <img style={{ width: "50%", margin: "0" }} src={image1162} alt="" />
                            </div>
                        </div>
                        <div className="section-6-sub-1" style={{ backgroundColor: "#F5F6F8" }}>
                            <p>23% off in all products</p>
                            <p style={{ color: "#FB2E86" }}>View collecction</p>
                            <div className="section-6-img" style={{ padding: "0" }}>
                                <img style={{ width: "85%" }} src={image1161} alt="" />
                            </div>
                        </div>
                        <div className="section-6-sub-2" >
                            <div className="section-6-sub-2-list">
                                <div className="section-6-sub-2-list-image">
                                    <img className="section-6-sub-2-img" src={image30} alt="" style={{ width: "55px" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "0" }}>Executive Seat chair</p>
                                    <p style={{ margin: "0" }}>$32.00</p>
                                </div>
                            </div>
                            <div className="section-6-sub-2-list">
                                <div className="section-6-sub-2-list-image">
                                    <img className="section-6-sub-2-img" src={image30} alt="" style={{ width: "55px" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "0" }}>Executive Seat chair</p>
                                    <p style={{ margin: "0" }}>$32.00</p>
                                </div>
                            </div>
                            <div className="section-6-sub-2-list">
                                <div className="section-6-sub-2-list-image">
                                    <img className="section-6-sub-2-img" src={image30} alt="" style={{ width: "55px" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "0" }}>Executive Seat chair</p>
                                    <p style={{ margin: "0" }}>$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* section 6 sub */}
                </div>
            </div>
            {/* Secttion 6 ends here*/}

            {/* footer section */}

            <FooterComponent />

        </div>
    )
}
export default Home;
