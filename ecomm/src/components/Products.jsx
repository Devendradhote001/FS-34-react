import React from "react";

const Products = ({ elem }) => {
  return (
    <div className="p-4 border rounded-xl w-[25%]">
      <div className="h-[60%] mb-5">
        <img
          className="h-full w-full"
          src={elem.url}
          alt=""
        />
      </div>
      <div>
        <h4>{elem.productName}</h4>
        <p>{elem.description}</p>
        <p className="mb-5">{elem.price}</p>
        <button className="w-full py-2 rounded-xl bg-blue-800 text-white cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
