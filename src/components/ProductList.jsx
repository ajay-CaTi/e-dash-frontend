import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <div className="container">
        <div className="mt-3 mb-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
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
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody className="overfl">
            <tr>
              <th scope="row">theader</th>
              <td>tdata</td>
              <td className="d-flex justify-content-center">
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-warning ms-1">
                  <Link to="/">Edit</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
