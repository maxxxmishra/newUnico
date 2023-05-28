import { React, useState, useEffect, useRef } from "react";
import "./AddJob.css";
import axios from "axios";

const AddJob = () => {
  const productId = useRef("");
  const productCategory = useRef("");
  const productName = useRef("");
  const price = useRef("");
  const productWeight = useRef("");
  const ingredents = useRef("");
  const shelfLife = useRef("");
  const productStock = useRef("");
  const productImage = useRef("");
  const nutrition = useRef("");
  const productDescription = useRef("");
  var id = 0;

  // const [Category, setCategory] = useState("");
  var Category = "";
  // console.log(Category);

  const Allpro = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios
        .get("http://localhost:8080/api/v1/admin/readAllProduct")
        .then((res) => {
          console.log(res.data.data);
          var result = res.data.data;

          id = result.length + 1;
          console.log("id = ", id);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Allpro();
  }, []);

  const clickHandler = async (e) => {
    // e.preventdefalut();
    console.log("hn click ho rha hai ");

    const data = {
      productId: id,
      productCategory: Category,
      productName: productName.current.value,
      price: price.current.value,
      productWeight: productWeight.current.value,
      ingredents: ingredents.current.value,
      shelfLife: shelfLife.current.value,
      productStock: productStock.current.value,
      productImage: productImage.current.value,
      nutrition: nutrition.current.value,
      productDescription: productDescription.current.value,
    };
    console.log(data);

    try {
      axios
        .post("http://localhost:8080/api/v1/admin/createProduct", {
          data: data,
        })
        .then((res) => {
          console.log(res);
          alert("Product Added SuccessFully");
        });
    } catch (error) {
      console.log(error);
      alert("There is something wrong ");
    }
    // productId.current.value = "";
    // productCategory = "";
    productName.current.value = "";
    price.current.value = "";
    productWeight.current.value = "";
    ingredents.current.value = "";
    shelfLife.current.value = "";
    productStock.current.value = "";
    productImage.current.value = "";
    nutrition.current.value = "";
    productDescription.current.value = "";
  };

  const handelChange = (event) => {
    console.log(event.target.value);
    Category = event.target.value;
    console.log(Category);
  };
  return (
    <div className="addjobbody">
      <div class="addjobwrapper">
        <div class="title">Add New Product</div>
        <div class="form">
          {/* <div class="inputfield">
            <label>productId</label>
            <input ref={productId} type="text" class="input" />
          </div> */}
          <div class="inputfield">
            <label>productCategory</label>
            <div class="custom_select">
              <select onChange={handelChange}>
                <option value="">Select</option>
                <option value="c1">
                  <button>Category-1</button>
                </option>
                <option value="c2">Category-2</option>
                <option value="c3">Category-3</option>
              </select>
            </div>
          </div>
          <div class="inputfield">
            <label>productName</label>
            <input ref={productName} type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>price</label>
            <input ref={price} type="number" class="input" />
          </div>
          {/* <div class="inputfield">
            <label>discount</label>
            <input ref={ type="number" class="input" />
          </div> */}
          <div class="inputfield">
            <label>productWeight</label>
            <input ref={productWeight} type="number" class="input" />
          </div>
          <div class="inputfield">
            <label>ingredents</label>
            <input ref={ingredents} type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>shelfLife</label>
            <input ref={shelfLife} type="number" class="input" />
          </div>
          <div class="inputfield">
            <label>productStock</label>
            <input ref={productStock} type="number" class="input" />
          </div>
          <div class="inputfield">
            <label>productImage</label>
            <input ref={productImage} type="file" class="input" />
          </div>

          <div class="inputfield">
            <label>nutrition</label>
            <input ref={nutrition} type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>productDescription</label>
            <input ref={productDescription} type="text" class="input" />
          </div>

          <div class="inputfield" onClick={clickHandler}>
            <input type="submit" value="Add product" class="btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
