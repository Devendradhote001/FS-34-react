import React, { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [cards, setCards] = useState([]);


  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>Hello</h1>
      <Form
        handle={handleChange}
        setUser={setUser}
        user={user}
        setCards={setCards}
      />

      {cards.map((elem) => {
        return <Card elem={elem} />;
      })}
    </div>
  );
};

export default App;
