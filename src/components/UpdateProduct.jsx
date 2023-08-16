import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompnay] = React.useState("");
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  // fetch data in empty fields
  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:4500/product/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompnay(result.company);
  };

  const updateProd = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:4500/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };

  // data send in API called PAyload

  return (
    <div className="inputBox">
      <h1>Update Product</h1>
      <div>
        <input
          type={"text"}
          placeholder="Enter product name"
          className="add"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && <span className="err_mess">Enter valid name</span>}
        <input
          onChange={(e) => setPrice(e.target.value)}
          type={"number"}
          value={price}
          placeholder="Enter product price"
        />
        {error && !price && <span className="err_mess">Enter valid price</span>}
        <input
          onChange={(e) => setCategory(e.target.value)}
          type={"text"}
          value={category}
          placeholder="Enter product category"
        />
        {error && !category && (
          <span className="err_mess">Enter valid category</span>
        )}
        <input
          onChange={(e) => setCompnay(e.target.value)}
          type={"text"}
          value={company}
          placeholder="Enter product company"
        />
        {error && !company && (
          <span className="err_mess">Enter valid comapny</span>
        )}
        <button className="but_sty" type="button" onClick={updateProd}>
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
