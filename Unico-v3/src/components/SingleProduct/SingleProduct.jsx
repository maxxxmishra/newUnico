import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-1.webp";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const SingleProduct = () => {
  const location = useLocation();
  const pro = location.state;
  return (
    <>
      <Header />
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img
                src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360"
                alt=""
              />
            </div>
            <div className="right">
              <span className="name">{pro.productName}</span>
              <span className="price">
                <s>Rs. 200</s>Rs. {pro.price}
              </span>
              <span className="desc">{pro.productDescription}</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <button className="add-to-cart-button">
                  <FaCartPlus size={20} />
                  Add to Cart
                </button>
              </div>

              <span className="divider" />

              <div className="info-item">
                <span className="text-bold">
                  Ingredients :
                  <br />
                  <span> {pro.ingredents} </span>
                  <br />
                </span>
                <span className="text-bold">
                  Additional Information : <br />
                  <span> {`ShelfLife : ${pro.shelfLife}`}</span>
                  <br />
                  <span>{`ProductWeight : ${pro.productWeight}`}</span>
                  <br />
                  <span>{`ProductStock : ${pro.productStock}`}</span>
                </span>
                <br />
                <span className="text-bold">
                  Share :
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* <img className="low-image" src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/Quality_Check_21.png?v=1664780757&width=710" alt="" /> */}
          {/* <RelatedProducts/> */}
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default SingleProduct;
