import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex border items-center gap-10 border-gray-400 w-90 px-4 py-2 rounded-xl">
      <Search size={22} />
      <input className="outline-0 text-md" type="text" placeholder="Search products.." />
    </div>
  );
};

export default SearchBar;
