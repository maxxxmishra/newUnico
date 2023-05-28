import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-1.webp"
import { Link } from "react-router-dom";

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360" alt="" />
                </div>
                <div className="right">
                    <span className="name">Jowar Ajwain Jaggery Mini Cookies</span>
                    <span className="price"><s>Rs . 149</s>Rs . 125</span>
                    <span className="desc">“We all have been listening to our grandmothers about the benefits of Ajwain or Carom Seeds. From being an essential part of the Indian diet to being the key ingredient in some of the best go-to snacks like Namakpaare, Ajwain offers benefits like no other! <br /> <br />

So we thought let’s bake these helpful, kind, seed spices with a humble, generous grain- Jowar. And little did we know that we were creating Magic! <br /> <br />

When you take the first bite of these ‘little sweet-little salty’ magical coin cookies, your brain goes into a bliss state for a few seconds and comes back shouting for more!”</span>

                    <div className="cart-buttons">
                        <button className="add-to-cart-button">
                            {/* <FaCartPlus size={20}/> */}
                            <Link className="link" to="/allProducts">Shop All Products</Link>
                        </button>
                    </div>

                    <span className="divider" />

                    <div className="info-item">
                        
                        <span className="text-bold">Ingredients : <br />
                            <span> Ingredient 1 </span>
                            <br />
                            <span> Ingredient 2 </span>
                        </span>
                        <span className="text-bold">Additional Information : <br />
                            <span> Info 1</span>
                            <br />
                            <span> Info 2</span>
                        </span>
                        <br />
                        <span className="text-bold">Share :
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16} />
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>
            {/* <RelatedProducts/> */}
        </div>
    </div>;
};

export default SingleProduct;


