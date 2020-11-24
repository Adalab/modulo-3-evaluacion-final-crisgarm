import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecie";

const Filters = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <FilterByName
        handleFilterChange={props.handleFilterChange}
        nameFilter={props.nameFilter}
      />
      <FilterBySpecies handleFilterChange={props.handleFilterChange} />
    </form>
  );
};

export default Filters;
