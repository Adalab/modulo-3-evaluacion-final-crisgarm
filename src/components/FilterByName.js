import React from "react";

const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange(ev.target.value);
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
        onChange={handleInputChange}
      />
    </>
  );
};

export default FilterByName;
