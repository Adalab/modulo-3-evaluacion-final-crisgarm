import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <form className="form">
      <FilterByName handleInputChange={props.handleInputChange} />
    </form>
  );
};

export default Filters;
