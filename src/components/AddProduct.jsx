import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [company, setCompany] = useState();
  const [error, setError] = useState(false);

  const addDetalis = async () => {
    console.log(!name);
    if (!name || !company || !price || !category) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:4500/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="inputBox">
      <h1>Ad Product</h1>
      <div>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          placeholder="Enter product name"
        />
        {error && !name && (
          <span style={{ color: "red" }}>Enter valid name</span>
        )}

        <input
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type={"text"}
          placeholder="Enter product price"
        />
        {error && !price && (
          <span style={{ color: "red" }}>Enter valid price</span>
        )}
        <input
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type={"text"}
          placeholder="Enter product category"
        />
        {error && !category && (
          <span style={{ color: "red" }}>Enter valid category</span>
        )}

        <input
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type={"text"}
          placeholder="Enter product company"
        />
        {error && !company && (
          <span style={{ color: "red" }}>Enter valid company</span>
        )}

        <button className="but_sty" type="button" onClick={addDetalis}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
