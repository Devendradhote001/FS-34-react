import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../MyContext";

const CreateProduct = () => {
  let { products, setProducts } = useContext(MyStore);

  let { register, handleSubmit, reset } = useForm();

  let handleFormSubmit = (data) => {
    let updateArr = [...products, data];
    setProducts(updateArr);
    localStorage.setItem("products", JSON.stringify(updateArr));
    reset();
    alert("product created");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Create New Product
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Fill in the details to add a new product to your store
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/50 p-8 lg:p-12">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
            {/* Product Name */}
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Product Name
              </label>
              <input
                {...register("productName")}
                type="text"
                id="productName"
                name="productName"
                required
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-lg"
                placeholder="Enter product name..."
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                name="description"
                rows="4"
                required
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl resize-vertical focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-lg"
                placeholder="Describe your product..."
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Price (₹)
              </label>
              <input
                {...register("price")}
                type="number"
                id="price"
                name="price"
                step="0.01"
                min="0"
                required
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-lg"
                placeholder="0.00"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Category
              </label>
              <select
                {...register("category")}
                id="category"
                name="category"
                required
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-lg appearance-none"
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
                <option value="sports">Sports</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Product Image
              </label>
              <input
                {...register("url")}
                type="url"
                id="image"
                className="w-full px-5 py-4 text-lg border-2 border-dashed border-gray-300 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-lg file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-8 rounded-2xl text-xl font-bold shadow-xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
