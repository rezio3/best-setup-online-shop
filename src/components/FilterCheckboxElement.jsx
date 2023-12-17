import React from "react";

const FilterCheckboxElement = (props) => {
	const { filter, setFilter } = props.filterState;

	const inputHandler = (e) => {
		if (e.target.checked) {
			setFilter({
				...filter,
				appliedFilters: [...filter.appliedFilters, props.id],
			});
		} else {
			setFilter({
				...filter,
				appliedFilters: filter.appliedFilters.filter(
					(element) => element !== props.id
				),
			});
		}
	};
	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="checkbox"
					className="filter-container__filter-checkbox"
					id={props.id}
					onChange={inputHandler}
					checked={filter.appliedFilters.some(
						(element) => element === props.id
					)}
				></input>
				<label htmlFor={props.id}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxElement;
