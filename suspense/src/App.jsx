import React, { lazy, Suspense, useState } from "react";
import About from "./components/About";
import Loader from "./components/Loader";
import { useProducts } from "./hooks/useProducts";
let Home = lazy(() => import("./components/Home"));

const App = () => {
  let { data, isPending } = useProducts();

  if (isPending) return <h1>Loading..</h1>;

  let timer;

  const handleChange = (e) => {
    clearTimeout(timer)


    timer = setTimeout(() => {
      let res = data.filter((elem) => {
        return elem.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      console.log(res);
    }, 1000);
  };

  return (
    <div>
      <h1>App</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search Products..."
      />
      {data.map((elem) => (
        <h1 key={elem.id}>{elem.title}</h1>
      ))}
    </div>
  );
};

export default App;
