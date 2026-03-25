import React from "react";

const UserCard = ({ user, handleDelete, setEditUser, setToggle }) => {
  console.log("User card rendering...");

  return (
    <div className=" h-fit shadow-xl border-2 border-gray-400 flex flex-col gap-4 rounded-xl p-4">
      <div className="h-[80%]  rounded-full overflow-hidden">
        <img
          className="h-full self-center object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-green-700 text-2xl font-semibold">{user.name}</p>
        <p className="text-xl text-gray-700">{user.email}</p>
        <p className="text-xl text-gray-700">{user.designation}</p>
        <p className="text-xl text-gray-700">{user.emp_id}</p>
      </div>
      <div className="flex gap-4 w-full justify-between">
        <button
          onClick={() => {
            setEditUser(user);
            setToggle(true);
          }}
          className="w-[50%] border py-3 rounded-xl bg-yellow-600 text-white cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="w-[50%] border py-3 rounded-xl bg-red-700 text-white cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserCard;
