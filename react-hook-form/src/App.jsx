import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);

  let handleFormData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="h-screen bg-gray-200 p-5 flex justify-center gap-10 items-center flex-col">
      <h1 className="text-3xl text-red-900 font-bold">hello</h1>

      <form
        onSubmit={handleSubmit(handleFormData)}
        className=" bg-white w-[40vh] rounded-2xl p-8 flex gap-4 flex-col"
        action=""
      >
        <input
          {...register("name", { required: true })}
          className="border rounded py-2 px-5 outline-0"
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">name is required</p>}
        <input
          {...register("email", { required: true })}
          className="border rounded py-2 px-5 outline-0"
          type="text"
          placeholder="email"
        />
        {errors.email ? (
          <p className="text-red-500">Email is required</p>
        ) : null}

        <input
          {...register("password", { required: true, minLength: 6 })}
          className="border rounded py-2 px-5 outline-0"
          type="text"
          placeholder="password"
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500">At least 6 characters required</p>
        )}

        <button className="py-2 px-5 bg-blue-600 text-white cursor-pointer rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
