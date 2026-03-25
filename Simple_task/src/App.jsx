import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import AddUserForm from "./components/AddUserForm";

const App = () => {
  const [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  console.log(users);

  const [editUser, setEditUser] = useState(null); // this for getting data from userCard and send them into form

  let handleDelete = (id) => {
    let filteresUsers = users.filter((elem) => elem.id !== id); // find every data object and return opposite of condition
    setUsers(filteresUsers); // for updating our ui
    localStorage.setItem("users", JSON.stringify(filteresUsers));
  };

  return (
    <div className="h-screen p-4">
      <Navbar setToggle={setToggle} toggle={toggle} />

      {toggle ? (
        <AddUserForm
          users={users}
          setEditUser={setEditUser}
          setUsers={setUsers}
          setToggle={setToggle}
          editUser={editUser}
        />
      ) : (
        <div className="h-[90%] mt-5 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4">
          {users.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                user={elem}
                handleDelete={handleDelete}
                setEditUser={setEditUser}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
