import React from "react";

const FilterCheckboxElement = (props) => {
	const inputHandler = (e) => {
		props.filterState.setFilter({
			...props.filterState.filter,
			[`${props.name}`]: e.target.checked,
		});
	};
	console.log(props.filterState.filter);
	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="checkbox"
					className="filter-container__filter-checkbox"
					id={props.name}
					onChange={inputHandler}
					checked={props.filterState.filter[props.name]}
				></input>
				<label htmlFor={props.name}>{props.name}</label>
			</li>
		</>
	);
};

export default FilterCheckboxElement;
