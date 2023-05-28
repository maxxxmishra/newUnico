import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"

import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Cart = ({setShowCart}) => {
    var cart = JSON.parse(localStorage.Cart) ;
    // console.log("cart in = " ,cart) ;
    var p = 0 ;
    // console.log("cart in = " , cart) ;
    const Navigate = useNavigate();

    var q =1 ;
    // const [q ,setq] = useState(1) ;
    const getQuantity =(id)=>{
        q=1 ;
        // console.log("getq",id) 
        const arr = JSON.parse(localStorage.quantity)
        // console.log(arr)
        
        for(let i = 0 ;i <arr.length ; i++){
            if(arr[i]===id){
                q = (q+1) ;
                // setq(q+1) ;
                
            }
        }
        // setq(q) ;
        // console.log(q) ;
        return q ;
    }

    useEffect(()=>{
        // console.log("or ye hai return valu = " ,getQuantity());
        getQuantity() ;
    },[])



    return (
    <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>setShowCart(false)}>
                    <MdClose/>
                    <span  className="closetext">Close</span>
                </span>
            </div>

            {/* <div className="empty-cart">
                <BsCartX/>
                <span>No Products in The Cart</span>
                <Link to="/"><button className="return-cta">Return</button></Link>
            </div> */}

            <>
                {cart.map((curUser) => {
              const {
               productName ,
               price,
               productStock,
               productId
              } = curUser;
            // console.log(curUser) ;
            
            // console.log(getQuantity(productId)) ;
            // console.log(q , "for  = " , productId) ;
            q = getQuantity(productId);
            p = p+(Number(price)*q) ;
            return <CartItem name = {productName} price = {price} stock = {productStock} id ={productId}/>
        })}
                {/* <CartItem/> */}
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="totaltext">SubTotal : </span>
                        <span className="totaltext total">₹ {p}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={()=>{!(localStorage.user) ? Navigate('/user'): Navigate('/checkOut' ,{state : p})}}>CheckOut</button>
                    </div>
                </div>
                
            </>

        </div>
    </div>
    );
};

export default Cart;
