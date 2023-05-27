import { useEffect, useState } from "react";
import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";

const CartItem = ({name , price ,stock ,id}) => {
    // const [q ,setq] = useState(1);
    var q =1 ;
    const getQuantity =()=>{
        const arr = JSON.parse(localStorage.quantity)
        // console.log(arr)
        
        for(let i = 0 ;i <arr.length ; i++){
            if(arr[i]===id){
                q = (q+1) ;
                
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

    const removeq = (ID)=>{
        const ar = JSON.parse(localStorage.quantity)

        for(let i = 0 ;i<ar.length ; i++){
            if(ar[i]===ID){
                ar.splice(i, 1);
                console.log(ar);
                localStorage.setItem("quantity", JSON.stringify(ar));
                break ;
            }
        }
        window.location.reload();


    }

    const addq = (ID)=>{
        const ar = JSON.parse(localStorage.quantity)

        // for(let i = 0 ;i<ar.length ; i++){
        //     if(ar[i]===ID){
        //         ar.splice(i, 1);
        //         console.log(ar);
        //         localStorage.setItem("quantity", JSON.stringify(ar));
        //         break ;
        //     }
        // }

        ar.push(ID) ;
        localStorage.setItem("quantity", JSON.stringify(ar));

        window.location.reload();


    }

    const removeqall = (ID)=>{
        const ar = JSON.parse(localStorage.quantity)

        for(let i = 0 ;i<ar.length ; i++){
            if(ar[i]===ID){
                ar.splice(i);
                console.log(ar);
                // localStorage.setItem("quantity", JSON.stringify(ar));
                // break ;
            }
        }

        localStorage.setItem("quantity" , JSON.stringify(ar) )

    }
    return (
        
    <div className="cart-products">
        <div className="cart-product">
            <div className="image-container">
                <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360" alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{name}</span>
                <MdClose className="close-btn" onClick={()=>{
                    console.log(JSON.parse(localStorage.Cart));
                    const arr = JSON.parse(localStorage.Cart)
                    for(let i = 0 ; i<arr.length ; i++){
                        // if(arr[i].productId==='2'){
                        //     // console.log("ho gya remove");
                        //     // JSON.parse(localStorage.Cart)

                        // }
                        console.log(arr[i].productId===id);
                        if(arr[i].productId===id){
                            // localStorage.remove(localStorage.Cart[i])
                            // JSON.parse(localStorage.Cart)[i]
                            arr.splice(i, 1);
                            console.log(arr);
                            localStorage.setItem("Cart", JSON.stringify(arr));
                            removeqall(id);
                            window.location.reload();

                        }
                    }
                }}/>

                <div className="quantity-buttons">
                    <span onClick={()=>{
                        console.log("- wala" , id)
                        removeq(id) ;
                    }}>-</span>
                    <span>{getQuantity()}</span>
                    <span onClick={()=>{
                        console.log("+ wala" ,id)
                        addq(id)
                    }}>+</span>
                </div>

                <div className="text">
                    <span>{q}</span>
                    <span>x</span>
                    <span>₹ {price}</span>
                </div>

            </div>
        </div>
    </div>
    );
};

export default CartItem;
