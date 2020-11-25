import React from "react";

const FilterByName = (props) => {
  const handleFilterChange = (ev) => {
    props.handleFilterChange({
      value: ev.target.value,
      id: ev.target.id,
    });
  };

  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        className="form__input"
        placeholder="Search"
        onChange={handleFilterChange}
        value={props.nameFilter}
      />
    </>
  );
};

export default FilterByName;
