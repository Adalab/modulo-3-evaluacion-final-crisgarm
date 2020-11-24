import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecie";

const Filters = (props) => {
  return (
    <form className="form">
      <FilterByName handleFilterChange={props.handleFilterChange} />
      <FilterBySpecies handleFilterChange={props.handleFilterChange} />
    </form>
  );
};

export default Filters;
