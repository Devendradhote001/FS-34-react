import React from "react";

const Card = ({ elem }) => {
  return (
    <div>
      <h1>Name - {elem.name}</h1>
      <h2>Email - {elem.email}</h2>
      <h3>Mobile - {elem.mobile}</h3>
    </div>
  );
};

export default Card;
