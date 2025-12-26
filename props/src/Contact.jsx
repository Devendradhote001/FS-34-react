import React from "react";

const Contact = (props) => {
  console.log("contact...");

  props.tum("chla jaa .....");

  return (
    <div>
      <h1>Contact - {props.chacha}</h1>
    </div>
  );
};

export default Contact;
