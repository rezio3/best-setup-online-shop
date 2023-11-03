import React from "react";

const FilterCheckboxElement = (props) => {
	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="checkbox"
					className="filter-container__filter-checkbox"
					id={props.name}
				></input>
				<label htmlFor={props.name}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxElement;
