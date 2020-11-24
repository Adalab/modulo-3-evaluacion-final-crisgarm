import React from "react";
import FilterByAlphabeticalOrder from "./FilterByAlphabeticalOrder";
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
      <FilterByAlphabeticalOrder handleCheckInput={props.handleCheckInput} />
    </form>
  );
};

export default Filters;
