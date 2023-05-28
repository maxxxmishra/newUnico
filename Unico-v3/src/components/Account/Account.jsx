import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Account.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "../../css-config/mixins.scss"
import axios from  'axios'


const Account = () => {
  const Navigate =  useNavigate();
  const data  = {
    userId : JSON.parse(localStorage.user).userId
  }
  const [order ,setOrder] = useState('');

  try {
    axios.post("http://localhost:8080/api/v1/customer/readCustomerById" , {data : data}).then((res)=>{
      console.log(res.data.data) ;
      // setOrder(res.data.data) ;
    })
    
  } catch (error) {
    console.log(error) ;
    
  }

  const clickHandeler = ()=>{
    // localStorage.removeItem("user");
    var arr = JSON.parse(localStorage.user)
    // console.log(arr) ;
    // arr.slice(0) ;
    // localStorage.setItem("user" , arr ) ;
    localStorage.removeItem("user") ;
    console.log("removed user")
    //  var flagu = localStorage.user;
  // if (flagu === undefined) {
  //   localStorage.setItem("user", JSON.stringify([]));
  // }

    Navigate('/')
  }

  if (!localStorage.user) {
    return (
      <>
        <li onClick={() => Navigate("/login")}>
          &nbsp;<span>Please Login First</span>{" "}
        </li>
      </>
    );
  }
  return (
    <div>
      <Header/>
      <section id="about-us">

        <div className="text">
          {/* <h4>About Us</h4> */}
          <h1>
            Account Detials
          </h1>
          <div className="last-text">
            <div className="text1">
              <h3>UserName - {(JSON.parse(localStorage.user)).firstName + " " + (JSON.parse(localStorage.user)).lastName}</h3>
            </div>
          </div>
          <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta" onClick={clickHandeler}>Logout</div>
          </div>
        </div>
        <div className="text">
          <h1>
          Orders Placed
          </h1>
          <div className="last-text">
            <div className="text1">
              <h3>Order Details </h3>
              {/* {order}  */}
              <h3></h3>
            </div>
          </div>
          <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta"><Link className='link' to="/">Shop Now</Link></div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Account