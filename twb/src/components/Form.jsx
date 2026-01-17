import React from "react";

const Form = ({ handle, user, setCards, setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards((prev) => [...prev, user]);
    setUser({
      name: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          value={user.name}
          name="name"
          onChange={handle}
          type="text"
          placeholder="name"
        />{" "}
        <br /> <br />
        <input
          value={user.email}
          name="email"
          onChange={handle}
          type="text"
          placeholder="Email"
        />{" "}
        <br /> <br />
        <input
          value={user.mobile}
          name="mobile"
          onChange={handle}
          type="text"
          placeholder="Mobile"
        />{" "}
        <br />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default Form;
