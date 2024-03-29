import "../../styles/home/section_1.scss";
import "../footer/Footer.css"

const FooterComponent = () => {

    return (
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
                                <span>Sign Up</span>
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
    )
}
export default FooterComponent;