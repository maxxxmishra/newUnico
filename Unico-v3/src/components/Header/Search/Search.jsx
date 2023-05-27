import { useState , useEffect} from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import axios from "axios"


import "./Search.scss";
import { useNavigate } from "react-router-dom";

const Search = ({setShowSearch}) => {
    const Navigate = useNavigate();
    const [query , setQuery] = useState();

    const [users, setUsers] = useState([]);
    const [pro , setPro] = useState({});
    const [show, setshow] = useState(false);

  const Allpro = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios
        .get("http://localhost:8080/api/v1/admin/readAllProduct")
        .then((res) => {
          console.log(res.data.data);
          var result = res.data.data;

          if (result.length > 0) {
            setUsers(result);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Allpro();
  }, []);

    const searchPost = (val)=>{
        console.log(val);
        for (let i = 0; i < users.length; i++) {
        if(users[i].productName===val){
            setPro(users[i]) ;
            console.log(pro) ;
            setshow(true) ;
        }
    }

    }
    const clicked = ()=>{
        Navigate('./singleProduct' ,{state : pro}) ;
    }
    return(
         <div className="search-modal">
            <div className="form-field">
                <input type="text" placeholder="Search For Product" autoFocus name="" id="" value={query} onChange={(e)=>searchPost(e.target.value)}/>
                <MdClose className="close-btn" onClick={()=>setShowSearch(false)}/>
            </div>

            <div className="search-result-content">
               { show ?
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360" alt="" />
                        </div>
                       
                       <div className="prod-details" on onClick={clicked}>
                            <span className="desc">{pro.price}</span>
                            <span className="name">{pro.productName}</span>
                            
                            <span className="desc">{pro.productDescription}</span>
                       
                    </div>
                </div>
                 </div>
                        :<>There is no Such Poduct</>
                        }
            </div>

         </div>
    );
};

export default Search;
