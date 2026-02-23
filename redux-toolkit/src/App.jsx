import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";
import { addUser } from "./features/userSlice";

const App = () => {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.count);
  let { user } = useSelector((state) => state.user);
  console.log(user);



  return (
    <div>
      <h1>Hello</h1>
      <h1>Count is - {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>User - {user?.name}</h1>
      <p>age - {user?.age}</p>

      <button
        onClick={() =>
          dispatch(
            addUser({
              name: "rinku",
              age: 90,
            })
          )
        }
      >
        Add user
      </button>
    </div>
  );
};

export default App;
