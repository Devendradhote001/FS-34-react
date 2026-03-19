import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="h-[25vh]">
      <img className="h-full" src={category.image_url} alt="" />
    </div>
  );
};

export default CategoryCard;
