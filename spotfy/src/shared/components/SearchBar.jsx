import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="px-3 py-2 rounded-xl w-[85%] flex items-center gap-4 border border-gray-400">
      <Search />
      <input
        className="outline-0 w-full font-semibold"
        type="text"
        placeholder="What do you want to play?"
      />
    </div>
  );
};

export default SearchBar;
