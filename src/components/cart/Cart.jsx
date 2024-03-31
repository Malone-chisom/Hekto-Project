import { useContext } from "react";
import "../cart/Cart.css";
import Navbar from "../general/Navbar"
import { AppContext } from "../../context/context";
import FooterComponent from "../footer/Footer";


const CartComponent = () => {
    const shopContext = useContext(AppContext);
    const { cartItems, setCartItems, products, count, setCount } = shopContext;

    const handleRemoveProductFromCart = (productId) => {

        const updatedCart = cartItems.filter(item => item.id !== productId)

        setCartItems(updatedCart)

    }


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
    console.log("cartItems", cartItems)
    return (
        <div>
            <Navbar />

            <div className="cart-to-header">
                <div className="padding-horizontal ">
                    <div>
                        <h2> Shopping curt</h2>
                    </div>
                </div>

            </div>

            {/* cart items */}

            <div className="cart-items-container">
                <div className="padding-horizontal">
                    <div className="cart-items">
                        <div className={`cart-items-left ${cartItems.length == 1 ? 'cart-items-left-paddingY' : ''}`}>
                            {/* <div className={`cart-items-left ${cartItems.length == 1 ? 'cart-items-left-paddingY' : ''}`}> */}
                            {/* <div className="cart-items-left cart-items-left-paddingY"> */}

                            {
                                cartItems.length === 0 ? (<div style={{ height: '35vh', display: "flex", alignItems: "center", textAlign: 'center' }}>cart is empty</div>)
                                    :
                                    <>
                                        {cartItems?.map((item) => (
                                            <div key={item?.id} className="cart-items-box" >
                                                <div className="flexchild1">
                                                    <div className="flexchild1-header">
                                                        <h4 className="font-size-h" >Product</h4>
                                                    </div>
                                                    <div className="flexchild-img">
                                                        <div className="inner-flexchild-img">
                                                            <img src={item?.image} className="img" alt="product_img" />
                                                        </div>
                                                        <div className="flexchild-text">
                                                            <p className="font-size">
                                                                {
                                                                    item?.title
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flexchild2">
                                                    <div className="flexchild1-header">
                                                        <h4 className="font-size-h">price</h4>
                                                    </div>
                                                    <div className="">
                                                        <p className="font-size">${item?.price}</p>
                                                    </div>
                                                </div>

                                                <div className="flexchild2">
                                                    <div className="flexchild1-header">
                                                        <h4 className="font-size-h">Quantity</h4>
                                                    </div>
                                                    <div>
                                                        <p className="font-size">{item?.qty}</p>
                                                    </div>
                                                </div>


                                                <div>
                                                    <div>
                                                        <h4 className="font-size-h">Total</h4>
                                                    </div>
                                                    <div>
                                                        <p className="font-size">${item?.qty * item?.price}</p>
                                                    </div>
                                                </div>
                                                <button className="cancel" onClick={() => handleRemoveProductFromCart(item.id)}>x</button>
                                            </div>
                                        ))
                                        }

                                    </>
                            }


                        </div>
                    </div>
                    <div></div>
                </div>
            </div>


            <FooterComponent />
        </div>
    )
}

export default CartComponent