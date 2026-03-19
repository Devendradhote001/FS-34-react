import { useState } from "react";
import { useParams } from "react-router";

export const useMain = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  let { name } = useParams();

  let getDataAccordingCategory = async (name) => {
    let res = await axios.get(`https://swiggy.com/foods/category/${name}`);
    setCategoriesData(res.data);
  };

  return {
    name,
    categoriesData,
  };
};
