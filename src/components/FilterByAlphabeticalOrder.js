import React from "react";

const FilterByAlphabeticalOrder = (props) => {
  const handleCheckInput = (ev) => {
    props.handleCheckInput(ev.target.checked);
  };
  return (
    <>
      <label className="form__label" htmlFor="order">
        <input
          type="checkbox"
          id="order"
          name="order"
          className="form__checkbox"
          onChange={handleCheckInput}
        />
        Order by name
      </label>
    </>
  );
};

export default FilterByAlphabeticalOrder;
