import { Search } from "lucide-react";
import React from "react";7s/useSearch";

const SearchBar = () => {
  let { handleChange, searchSongs, setToggle, toggle } = useSearch();

  return (
    <div className="w-full relative items-center">
      <div className="px-3 py-2 rounded-xl w-[85%] flex items-center gap-4 border border-gray-400">
        <Search />
        <input
          onFocus={() => setToggle(true)}
          onBlur={() => setToggle(false)}
          onChange={handleChange}
          className="outline-0 w-full font-semibold"
          type="text"
          placeholder="What do you want to play?"
        />
      </div>
      {toggle && (
        <div className="h-[40vh] flex flex-col gap-4 overflow-auto left-0 mt-2 p-3 absolute w-full bg-gray-200">
          {searchSongs.map((elem) => (
            <div className="h-15 w-full p-2 flex gap-4 items-center rounded bg-black">
              <div className="w-12">
                <img className="w-full" src={elem.thumbnail} alt="" />
              </div>
              <div className="text-white">
                <h1>{elem.title.slice(0, 10)}</h1>
                <p>{elem.artist.slice(0, 10)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
