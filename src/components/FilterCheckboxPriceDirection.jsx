import React from "react";

const FilterCheckboxPriceDirection = (props) => {
	const inputHandler = () => {
		props.filterState.setFilter({
			...props.filterState.Filter,
		});
	};
	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="radio"
					className="filter-container__filter-checkbox"
					id={props.name}
					name="price-radio-checkbox"
					onChange={inputHandler}
				></input>
				<label htmlFor={props.name}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxPriceDirection;
