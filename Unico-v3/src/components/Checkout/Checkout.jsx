import React, { useState , useEffect } from 'react'
import "./Checkout.css"
import axios from "axios" 
import Unico from "../../assets/Unico.jpeg"
import { useLocation, useNavigate } from 'react-router-dom'



const Checkout = () => {
    const Navigate = useNavigate();
    const price = useLocation()
    // console.log(p.state);

    const [users, setUsers] = useState(0);

  const allcustomer = async () => {
    try {
      // console.log("hn hn chal rha hai ");
      axios
        .get("http://localhost:8080/api/v1/customer/readAllCustomer")
        .then((res) => {
          console.log(res.data.data);
          var result = res.data.data;

          
            setUsers(result.length);
      
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allcustomer();
  }, []);

    const user = JSON.parse(localStorage.user)
                    // console.log(user.userId) ;
    const product = JSON.parse(localStorage.Cart)
                    console.log(JSON.stringify(product)) ;                
    
   
    const data = {amount : price.state}
    const clickHandler = async(e)=>{
         e.preventDefault();
         var amount1 = ''
        //  var id1 =''
         var key1 =''
        try {
             axios.post("http://localhost:8080/api/v1/Payment/checkOut" ,{data:data}).then((res)=>{
                console.log(res.data.data) 
                amount1 = res.data.data.amount ;
                console.log(amount1) ;
               const  id1 = res.data.data.id ;
                console.log(id1) ;
                axios.get('http://localhost:8080/api/v1/Payment/getKey').then((res)=>{
                key1 = res.data.key ;
                console.log(key1) ;
            })

const options = {
            key: key1, // Enter the Key ID generated from the Dashboard
            amount: amount1,
            currency: "INR",
            name: "Unico Foods",
            description: "Order Transaction",
            image: {Unico},
            order_id: id1,
            handler: async function (response) {
                const data = {
                    orderCreationId: id1,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:8080/api/v1/Payment/paymentVarification", data);
                
                console.log(result);
                alert(result.data.message);
                if(result.data.message==="verified succesfully"){
                    console.log(result.data.data) ;
                    
                    const data = {
                        userId : user.userId ,
                        CustomerId : users +1,
                        firstName : user.firstName ,
                        email : user.email ,
                        lastName : user.lastName ,
                        address  : "Jp house bai sahab hi pared Gwalior" ,
                        appartment : "40/906",
                        city : "Gwalior",
                        pinCode : "474001",
                        phone : "6232536423",
                        orderSumery : {
                           orders : (product) ,
                            price : price.state,
                        },
                        OId : result.data.data.razorpayOrderId,
                        PId : result.data.data.razorpayPaymentId
                    }
                    axios.post("http://localhost:8080/api/v1/customer/createCustomer" ,{data :data}).then((res)=>{
                        console.log(res.data) ;
                        if(res.data.message==="Customer created successfully"){
                            alert("Order Recived SuccessFully") ;
                            localStorage.removeItem("Cart") ;
                            var flag = localStorage.Cart;
                            // console.log(flag);
                        if (flag === undefined) {
                            localStorage.setItem("Cart", JSON.stringify([]));

                            localStorage.setItem("quantity", JSON.stringify([]));
  }
                            Navigate("/") ;
                        }
                    })
                }
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
            
        

})



            
        } catch (error) {
            console.log(error) ;
        }
    }

  return (
    <div>
      <div class="container">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>Country:</span>
                <input type="text" placeholder="India"/>
            </div>
            <div class="flex">
                <div class="inputBox">
                    <span>First Name:</span>
                    <input type="text" placeholder="First name"/>
                </div>
                <div class="inputBox">
                    <span>Second Name:</span>
                    <input type="text" placeholder="Second name"/>
                </div>
            </div>
            <div class="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="House/Apartment Number"/>
            </div>
            <div class="inputBox">
                <span></span>
                <input type="text" placeholder="Landmark, any relevant identifying objects"/>
            </div>
            <div class="inputBox">
                <span>Phone:</span>
                <input type="text" placeholder="10 digit contact number"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>City:</span>
                    <input type="text" placeholder="Jabalpur"/>
                </div>
                <div class="inputBox">
                    <span>State :</span>
                    <input type="text" placeholder="M.P."/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="482001"/>
                </div>
            </div>

        </div>

        {/* <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src="../../assets/card_img.png" alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

  </div>*/}

    </div> 

    <input type="submit" onClick={clickHandler} value="proceed to checkout" class="submit-btn"/>

</form>

</div>    

    </div>
  )
}

export default Checkout