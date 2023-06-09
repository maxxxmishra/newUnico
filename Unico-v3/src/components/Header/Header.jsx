import { useEffect, useState, useContext } from "react";
import { Link ,Navigate, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/Context";
import Cart from "../Cart/Cart";
import WebFont from 'webfontloader';
// import { AiOutlineDown } from "@react-icons/all-files";
import { AiOutlineDown } from "react-icons/ai";
import Unico from "../../assets/Unico.jpeg"

import "./Header.scss";


const Header = () => {
    const Navigate = useNavigate() ;
    var q = JSON.parse(localStorage.Cart).length ;
    const[scrolled,setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [log , setLog] = useState(false) ;
    // let log = 'login' ;
    const getuser = ()=>{

        
        if((localStorage.length)===2){
            // console.log("hn hn user hai") ;
            setLog(true) ;
            
            setLog("user") ;
            
        }
        else{
            // console.log("nhi user nhi hai login kro") ;
        }
    }

    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false)
        }
    }

    function fun(){
        Navigate('/login') ;
    }

    useEffect(()=>{
        getuser();
        window.addEventListener("scroll", handleScroll)
    },[]);
    useEffect(() => {
   WebFont.load({
     google: {
       families: ['Droid Sans', 'Chilanka']
     }
   });
  }, []);

  const isadmin = ()=>{
    var u = JSON.parse(localStorage.user)
    console.log(u.isAdmin) ;

    if((u.isAdmin)){
        return  1 ;
    }
    else{
        return 0 ;
    }
  }



    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ' '}`}>
                <div className="header-content">
                    <div className="center">
                        {/* <div className="image">
                        <Link><img src ={Unico}/></Link>
                        </div> */}
                        <div class="brand-name">
                            <Link to="/">
                                <img src={Unico} alt="" />
                            </Link>
                        </div>
                        
                        <Link className="linkcenter" to="/">Unico Foods</Link></div>
                    
                    <oll className="left">
            
                        <li><Link className="link" to="/">Home</Link></li>
            
                       <div class="dropdown">
                            <button class="dropbtn">Categories 
                                {/* <i class="AiOutlineDown"></i> */}
                                
                                <AiOutlineDown className="reactIcon"/> 
                                
                            </button>
                            
                            <div class="dropdown-content font-loader">
                                <li><Link className="linkd" to="/allProducts">allProducts</Link></li>
                                <li><Link className="linkd" to="/Millet-Meusli">Millet-Meusli</Link></li>
                                <li><Link className="linkd" to="/Millet-Laddo">Millet-Laddo</Link></li>
                                <li><Link className="linkd" to="/Millet-Bar">Millet-Bar</Link></li>

                            </div>
                        </div>
                        <li><Link className="link" to="/contact">Contact US</Link></li>
                    </oll>
                    
                    <div className="right">
                        <TbSearch onClick={()=>setShowSearch(true)}/>
                        <Link className="link" to = {!(localStorage.user) ? '/login' : isadmin() ? "/admin" : "/user"}  ><AiOutlineUser/></Link>
                        <span className="cart-icon" onClick={()=>setShowCart(true)}>
                            <CgShoppingCart/>
                            <span>{q}</span>
                        </span>
                    </div>
                </div> 
            </header>
            {
                showCart && <Cart setShowCart={setShowCart}/>
            }
            {
                showSearch && <Search setShowSearch={setShowSearch}/>
            }
        </>
    );
};

export default Header;
