import React from "react";

const FilterCheckboxPriceDirection = (props) => {
	const inputHandler = (el) => {
		const directionSetter = el.target.id === "price-up" ? true : false;
		props.filterState.setFilter({
			...props.filterState.filter,
			priceUp: directionSetter,
			priceDown: !directionSetter,
		});
	};

	return (
		<>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="radio"
					className="filter-container__filter-checkbox"
					id="price-up"
					name="price-radio-checkbox"
					onChange={inputHandler}
					checked={props.filterState.filter.priceUp}
				></input>
				<label htmlFor="price-up">Price up</label>
			</li>
			<li className="filter-container__filter-checkbox-element">
				<input
					type="radio"
					className="filter-container__filter-checkbox"
					id="price-down"
					name="price-radio-checkbox"
					onChange={inputHandler}
					checked={props.filterState.filter.priceDown}
				></input>
				<label htmlFor="price-down">Price down</label>
			</li>
		</>
	);
};

export default FilterCheckboxPriceDirection;
