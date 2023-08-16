import React from "react";

const AddProduct = () => {
  const addDetalis = () => {
    console.log("addDetalis");
  };

  return (
    <div className="inputBox">
      <h1>Ad Product</h1>
      <div>
        <input type={"text"} className="add" placeholder="Enter product name" />
        <input type={"number"} placeholder="Enter product price" />
        <input type={"text"} placeholder="Enter product category" />
        <input type={"text"} placeholder="Enter product company" />
        <button className="but_sty" type="button" onClick={addDetalis}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
