import React, { useContext } from "react";
import { MyContext } from "./context";

const Recipe = () => {
  const { showData, isLoading } = useContext(MyContext);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container my-3 d-flex  flex-wrap">
        {showData.map((elem, index) => {
          return (
            <div
              className="col-md-6 col-sm-12 col-lg-4 m-3 border-0 mx-auto card"
              key={index}
            >
              <img
                src={elem.recipe.image}
                className="img-fluid mx-auto"
                alt="ds"
                width="80%"
              />

              <h5 className="text-center">{elem.recipe.label}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recipe;
