import React from "react";
import CategoryCard from "./subComp/CategoryCard";
import { useLandingPage } from "../hooks/useLandingPage";

const Section2 = () => {
  let { categoryData, navigate } = useLandingPage();

  return (
    <div className="h-screen px-[10vw] mt-[10vh]">
      <h1 className="text-xl font-bold">Order our best food options</h1>
      <div className="mt-10 flex gap-6">
        {categoryData.map((elem, ind) => {
          return (
            <div
              onClick={() => navigate(`/restaurants/${elem.name}`)}
              key={ind}
            >
              <CategoryCard category={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
