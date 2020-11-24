import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecie";

const Filters = (props) => {
  return (
    <form className="form">
      <FilterByName handleInputChange={props.handleInputChange} />
      <FilterBySpecies handleInputChange={props.handleInputChange} />
    </form>
  );
};

export default Filters;
