import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:4500/products");
    result = await result.json();
    console.log(result);
    setProducts(result);
  };
  console.log(products);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:4500/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      alert("deleted successfully");
      getProducts();
    }
    console.log(result);
  };

  const searchHandle = async (e) => {
    let key = e.target.value.toLowerCase();
    if (key) {
      let result = await fetch(`http://localhost:4500/search/${key}`);
      result = await result.json();
      console.log(result);
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="container mll">
        <div className="mt-3 mb-3">
          <form className="d-flex" role="search">
            <input
              onChange={searchHandle}
              className="form-control me-2"
              type="search"
              placeholder="Search products here..."
              aria-label="Search"
            />
          </form>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Company</th>
              <th scope="col">Modify</th>
            </tr>
          </thead>
          <tbody className="overfl">
            {products.length > 0 ? (
              products.map((val, index) => (
                <tr key={val._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.category}</td>
                  <td>{val.company}</td>
                  <td className="d-flex justify-content-center">
                    <button
                      onClick={() => {
                        deleteProduct(val._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button className="btn btn-warning ms-1">
                      <Link className="tdn" to={`/update/${val._id}`}>
                        Edit
                      </Link>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td key={"index"}>No Result Found...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
