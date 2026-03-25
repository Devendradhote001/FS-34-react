import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const AddUserForm = ({ setUsers, setToggle, editUser, setEditUser, users }) => {
  console.log(editUser);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: editUser,
  });

  console.log(isValid);

  let handleFormSubmit = (data) => {
    if (editUser) {
      //  here is update logic

      setUsers((prev) => {
        let updatedUsers = prev.map((val) => {
          return val.id === editUser.id ? { ...val, ...data } : val;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
      setEditUser(null);
    } else {
      // this is for new user
      let arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle(false);
  };

  return (
    <div className="h-[90%] flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl font-bold">Add a User</h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="border-3 flex w-[30%] flex-col gap-6 border-yellow-500 rounded-xl p-8"
        action=""
      >
        <input
          {...register("name", { required: "Employee name is required" })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="text"
          placeholder="Employee Name"
        />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Employee email is required",
            pattern: {
              value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
              message: "Please add Valid email",
            },
          })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="email"
          placeholder="Employee Email"
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Employee mobile is required",
            minLength: {
              value: 10,
              message: "Min 10 Digits are required",
            },
            maxLength: {
              value: 10,
              message: "Max 10 digits are required",
            },
          })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="number"
          placeholder="Employee Mobile"
        />
        {errors.mobile && (
          <p className="text-red-700">{errors.mobile.message}</p>
        )}
        <input
          {...register("designation", {
            required: "Employee designation is required",
          })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="text"
          placeholder="Employee Designation"
        />
        {errors.designation && (
          <p className="text-red-700">{errors.designation.message}</p>
        )}
        <input
          {...register("emp_id", { required: "Employee id is required" })}
          className="outline-0 p-4 border rounded-xl text-xl"
          type="text"
          placeholder="Employee Id"
        />
        {errors.emp_id && (
          <p className="text-red-700">{errors.emp_id.message}</p>
        )}
        <div className="flex gap-10">
          <div className="flex gap-5">
            <p className="text-xl">Manager</p>
            <input
              {...register("role", { required: "Employee role is required" })}
              type="radio"
              value="manager"
            />
          </div>
          {errors.role && <p className="text-red-700">{errors.role.message}</p>}
          <div className="flex gap-5">
            <p className="text-xl">Employee</p>
            <input {...register("role")} type="radio" value="employee" />
          </div>
        </div>

        <button
          disabled={!isValid}
          className={` ${
            !isValid ? "bg-gray-500 cursor-none" : "bg-blue-600"
          } text-white py-3 text-xl rounded-xl cursor-pointer`}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
