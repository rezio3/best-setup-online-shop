import React from "react";

const FilterCheckboxPriceDirection = (props) => {
	const { filter, setFilter } = props.filterState;

	const inputHandler = (el) => {
		const directionSetter = el.target.id === "price-up" ? true : false;
		setFilter({
			...filter,
			priceUp: directionSetter,
			priceDown: !directionSetter,
		});
	};

	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="radio"
					className="checkbox"
					id="price-up"
					name="price-radio-checkbox"
					onChange={inputHandler}
					checked={filter.priceUp}
				></input>
				<label htmlFor="price-up">Price up</label>
			</li>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="radio"
					className="checkbox"
					id="price-down"
					name="price-radio-checkbox"
					onChange={inputHandler}
					checked={filter.priceDown}
				></input>
				<label htmlFor="price-down">Price down</label>
			</li>
		</>
	);
};

export default FilterCheckboxPriceDirection;
