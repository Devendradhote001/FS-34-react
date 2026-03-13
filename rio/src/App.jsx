import React from "react";
import { fetchProducts } from "./reducers/product/productThunk";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  let dispatch = useDispatch();

  dispatch(fetchProducts());

  return (
    <div>
      <h1>Hello from products</h1>
    </div>
  );
};

export default App;
