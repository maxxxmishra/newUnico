import "./Products3.scss";
import Product2 from "./Product/Product2";
import { useNavigate } from "react-router-dom";
const Products = ({headingText}) => {
    const Navigate = useNavigate();
    return <div className="products-container">
        <div className="sec2-heading">
            {headingText}    
        </div>
        {/* <span> Bite-sized, incredibly delicious gluten-free millet cookies. </span> */}
        
        <div className="products" >
        <Product2 li ={'/Millet-Meusli'} nameText={"Millet Meusli"} strikePrice={"Rs . 159"} normalPrice={"Rs . 139"}/>
        <Product2 li = {'/Millet-Laddo'} nameText={"Millet Laddo"} strikePrice={"Rs . 199"} normalPrice={"Rs . 179"}/>
        <Product2 li = {'/Millet-Bar'} nameText={"MilletBar"} strikePrice={"Rs . 219"} normalPrice={"Rs . 199"}/>
        </div>
    </div>;
};

export default Products;