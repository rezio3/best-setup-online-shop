import React from "react";

const FilterCheckboxElement = (props) => {
	const { filter, setFilter } = props.filterState;

	const inputHandler = (e) => {
		console.log("inputHandler", e, filter);
		setFilter({
			...filter,
			appliedFilters: [...filter.appliedFilters, e.target.name],
		});
	};
	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="checkbox"
					className="filter-container__filter-checkbox"
					id={props.id}
					onChange={inputHandler}
					checked={filter[props.id]}
				></input>
				<label htmlFor={props.id}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxElement;
