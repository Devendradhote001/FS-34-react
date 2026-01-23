import React from "react";
import { useState } from "react";

const CreateNote = ({ setNotesData, setCreateModal }) => {
  const [formData, setFormData] = useState({
    noteName: "",
    description: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // vo state jisme tumhe pura data store karna hai
    setNotesData((prev) => [...prev, formData]);

    setFormData({
      noteName: "",
      description: "",
    });
    setCreateModal(false);
  };

  return (
    <div className="bg-gray-200 rounded-xl flex flex-col gap-5 p-7 absolute top-[50%] w-[40%] left-[50%] -translate-1/2">
      <h1 className="self-center text-2xl font-semibold text-red-700">
        Create note
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Note Name</label>
          <input
            value={formData.noteName}
            name="noteName"
            onChange={handleChange}
            className="outline-none px-3 py-2 bg-white rounded-xl"
            id="name"
            type="text"
            placeholder="Note name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="desc">Description</label>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
            className="outline-none px-3 py-4 bg-white rounded-xl"
            id="desc"
            placeholder="Enter your note..."
          ></textarea>
        </div>
        <button className="w-full bg-blue-700 text-white py-2 cursor-pointer rounded-xl">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
