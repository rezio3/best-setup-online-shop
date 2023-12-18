import React from "react";

const FilterCheckboxElement = (props) => {
	const { filter, setFilter } = props.filterState;

	const inputHandler = (e) => {
		if (e.target.checked) {
			setFilter({
				...filter,
				[props.data]: [...filter[props.data], props.id],
			});
		} else {
			setFilter({
				...filter,
				[props.data]: filter[props.data].filter(
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
					data={props.data}
					onChange={inputHandler}
					checked={filter[props.data].some((element) => element === props.id)}
				></input>
				<label htmlFor={props.id}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxElement;
