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
      <label className="form__label" htmlFor="name">
        Search:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="form__input"
        onChange={handleFilterChange}
      />
    </>
  );
};

export default FilterByName;
