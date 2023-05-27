import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";

const CartItem = () => {
    return (
    <div className="cart-products">
        <div className="cart-product">
            <div className="image-container">
                <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360" alt="" />
            </div>
            <div className="prod-details">
                <span className="name">product Name</span>
                <MdClose className="close-btn"/>

                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>

                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span>₹ price</span>
                </div>

            </div>
        </div>
    </div>
    );
};

export default CartItem;
