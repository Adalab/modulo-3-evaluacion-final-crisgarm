import React from "react";

const FilterByAlphabeticalOrder = (props) => {
  const handleCheckInput = (ev) => {
    props.handleCheckInput(ev.target.checked);
  };
  return (
    <>
      <label className="form__label" htmlFor="order">
        Order by name:
      </label>
      <input
        type="checkbox"
        id="order"
        name="order"
        onChange={handleCheckInput}
      />
    </>
  );
};

export default FilterByAlphabeticalOrder;
