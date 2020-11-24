import React from "react";

const FilterBySpecies = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange({
      value: ev.target.value,
      id: ev.target.id,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="species">
        Specie:
      </label>
      <select name="species" id="species" onChange={handleInputChange}>
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
