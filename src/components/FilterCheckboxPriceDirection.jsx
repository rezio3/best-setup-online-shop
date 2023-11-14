import React from "react";

const FilterCheckboxPriceDirection = (props) => {
	props.filterState.setFilter(true);
	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="radio"
					className="filter-container__filter-checkbox"
					id={props.name}
					name="price-radio-checkbox"
				></input>
				<label htmlFor={props.name}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxPriceDirection;
