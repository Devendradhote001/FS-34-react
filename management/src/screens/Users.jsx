import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../MyContext";
import { axiosInstance } from "../config/axiosInstance";

const Users = () => {
  let { isLoading, setIsLoading } = useContext(MyStore);

  const [users, setUsers] = useState([]);
  console.log(users);

  let getUsers = async () => {
    let res = await axiosInstance.get("/users");
    if (res) {
      console.log("me componenet me call hus hu");
      setUsers(res.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();

    return () => {
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {users.map((elem) => (
        <h1 key={elem.id}>{elem.name.firstname}</h1>
      ))}
    </div>
  );
};

export default Users;
