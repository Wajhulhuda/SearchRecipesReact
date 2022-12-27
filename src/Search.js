import React, { useContext } from "react";
import { MyContext } from "./context";
const Search = () => {
  const { setSearch } = useContext(MyContext);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="col-md-6 col-sm-8 mx-auto text-center">
          <h1 className=" my-3">Food Search Recipes</h1>
          <input
            type="text"
            className="form-control col-sm-8"
            onChange={handleChange}
            id="input"
            placeholder="Search Recipes"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
