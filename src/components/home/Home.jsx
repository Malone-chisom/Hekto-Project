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

function Home({isHovered, handleMouseLeave, handleMouseEnter}) {

console.log("isHovered", isHovered)
console.log("handleMouseLeave", handleMouseLeave )


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
                                <div>
                                    <h1 className="section-1-left-content-heading general-font-size">
                                        New Furniture Collection Trends in 2023
                                    </h1>
                                </div>
                                <div className="section-1-left-content-box-3">
                                    <span className="section-1-left-content-text-3">
                                        Award wining brand global brand for Furniture in th world, <br /> we devliver every part of
                                        nigeria and abroad
                                    </span>
                                </div>
                                <button className="section-1-left-btn" 
                            //     onMouseEnter={handleMouseEnter}
                            //     onMouseLeave={handleMouseLeave}
                            //    style={{ backgroundColor: isHovered ? "red" : "blue" }}
                            onClick={() => console.log("Heyyy")}
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
                {/* <span className="section-1-left-lamp">
                <img src={lamp} className="lamp-size" alt="lamp" />
            </span> */}
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
                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={section2image1} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div>Cantila chair</div>
                                    <div className="dash-container">
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div>$42.00</div>
                                </div>
                            </div>
                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={section2image2} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div>Cantila chair</div>
                                    <div className="dash-container">
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div>$42.00</div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={section2image3} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div>Cantila chair</div>
                                    <div className="dash-container">
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div>$42.00</div>
                                </div>
                            </div>
                            <div className="section-2-box box-container-for-items">
                                <div className="box-container-for-items-image">
                                    <div className="inner-box-container-for-items-image">
                                        <img src={section2image4} id="px" alt="chair" />
                                    </div>
                                </div>
                                <div className="box-container-text-container">
                                    <div>Cantila chair</div>
                                    <div className="dash-container">
                                        <div className="dash green" style={{ backgroundColor: "green" }}></div>
                                        <div className="dash red" style={{ backgroundColor: "red" }}></div>
                                        <div className="dash blue" style={{ backgroundColor: "blue" }}></div>
                                    </div>
                                    <div>Code - Y523201</div>
                                    <div>$42.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section-2/ Ends */}

            {/* Section-3 Starts here */}
            <div className="section-3-container">
                <div className="padding-horizontal">
                    <div className="section-3">
                        <div>
                            <div className="section-heading">
                                <span>
                                    Latest Porducts
                                </span>
                            </div>
                            <div className="section-3-links sub-section-headers">
                                <div>New Arival</div>
                                <div>Best Seller</div>
                                <div>Featured</div>
                                <div>Special offer</div>
                            </div>
                            <div className="section-3-content">
                                <div className="overall-image-box-container">
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box">
                                                <img src={image1166} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span>Cafty Handy </span>
                                            </div>
                                            <div>
                                                <span>$42.00</span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box">
                                                <img src={image111} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span>Cafty Handy</span>
                                            </div>
                                            <div>
                                                <span>$42.00</span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box">
                                                <img src={image22} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span>Cafty Handy</span>
                                            </div>
                                            <div>
                                                <span>$42.00</span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overall-image-box-container">
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box">
                                                <img src={image23} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span>Cafty Handy</span>
                                            </div>
                                            <div>
                                                <span>$42.00</span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box">
                                                <img src={image22} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span>Cafty Handy</span>
                                            </div>
                                            <div>
                                                <span>$42.00</span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-box-container">
                                        <div className="inner-image-box-container">
                                            <div className="inner-image-box">
                                                <img src={section2image4} className="caftypic" alt="chair" />
                                            </div>
                                        </div>
                                        <div className="box-text">
                                            <div>
                                                <span>Cafty Handy</span>
                                            </div>
                                            <div>
                                                <span>$42.00</span>
                                                <span></span>
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
                                <h2>
                                    Unique Features Of Latest & Trebding products
                                </h2>

                                <ul>
                                    <li>All frames constructed with hardwood solids and laminates</li>
                                    <li style={{}}>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
                                    <li>Arms, backs and seats are structurally reinforced</li>
                                </ul>

                                <div className="section-5-cart">
                                    <button> Add to cart</button>
                                    <p className="" style={{ marginLeft: "10px" }}>
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
                                <div className="inner-section-6-img-container">
                                    <img className="sec6img" src={image1171} alt="image1171" />
                                </div>
                                <div>
                                    <p>Cantilever chair</p>
                                    <pre style={{ fontSize: "11px" }}>$26.00 $42.00</pre>
                                </div>
                            </div>
                            <div className="section-6-img-container">
                                <div className="inner-section-6-img-container">
                                    <img className="sec6img" src={image1170} alt="image1171" />
                                </div>
                                <div>
                                    <p>Cantilever chair</p>
                                    <pre style={{ fontSize: "11px" }}>$26.00 $42.00</pre>
                                </div>
                            </div>
                            <div className="section-6-img-container">
                                <div className="inner-section-6-img-container">
                                    <img className="sec6img" src={image31} alt="image1171" />
                                </div>
                                <div>
                                    <p>Cantilever chair</p>
                                    <pre style={{ fontSize: "11px" }}>$26.00 $42.00</pre>
                                </div>
                            </div>
                            <div className="section-6-img-container">
                                <div className="inner-section-6-img-container">
                                    <img className="sec6img" src={image22} alt="image1171" />
                                </div>
                                <div>
                                    <p>Cantilever chair</p>
                                    <pre style={{ fontSize: "11px" }}>$26.00 $42.00</pre>
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
                        <div className="section-6-sub-2">
                            <div className="section-6-sub-2-list">
                                <div className="">
                                    <img className="section-6-sub-2-img" src={image30} alt="" style={{ width: "55px" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "0" }}>Executive Seat chair</p>
                                    <p style={{ margin: "0" }}>$32.00</p>
                                </div>
                            </div>
                            <div className="section-6-sub-2-list">
                                <div className="">
                                    <img className="section-6-sub-2-img" src={image30} alt="" style={{ width: "55px" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "0" }}>Executive Seat chair</p>
                                    <p style={{ margin: "0" }}>$32.00</p>
                                </div>
                            </div>
                            <div className="section-6-sub-2-list">
                                <div className="">
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

            <div className="footer">
                <div className="padding-horizontal">
                    <div className="footer-section">
                        <div className="footer-left">
                            <h1>
                                Hekto
                            </h1>

                            <div className="email-box">
                                <form action="">
                                    <input name="Fname" placeholder="Enter Email Address" />
                                </form>
                                <div className="signup">
                                    Sign Up
                                </div>
                            </div>
                            <p>
                                contact info <br />
                                17, Princess Road, London Greater London NIV1 Uk
                            </p>
                        </div>
                        <div className="footer-right">
                            <h4>
                                Categories
                            </h4>
                            <p>
                                Laptops & Computer
                            </p>
                            <p>
                                Cameras & Photography
                            </p>
                            <p>
                                Smart Phone & Laptop
                            </p>
                            <p>
                                Video Games &
                            </p>
                            <p>
                                Waterproof & Headphones
                            </p>
                        </div>
                        <div className="footer-right">
                            <h4>
                                Customer Care
                            </h4>
                            <p>My Account</p>
                            <p>Discount</p>
                            <p>Returns</p>
                            <p>Orders History</p>
                            <p>Order Tracking</p>
                        </div>
                        <div className="footer-right">
                            <h4>
                                Pages
                            </h4>
                            <p>Blog</p>
                            <p>Browse the Shop</p>
                            <p>Category</p>
                            <p>Pre-Built Pages</p>
                            <p>Viusal Composer Element</p>
                            <p>WooCommerce Pages</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Home;
