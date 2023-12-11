import React from "react";

const FilterPriceRange = (props) => {
	const { filter, setFilter } = props.filterState;
	const handlePriceRangeInputs = (e) => {
		if (e.target.id === "price-from-input") {
			setFilter({
				...filter,
				priceRange: {
					...filter.priceRange,
					priceFrom: Number(e.target.value),
				},
			});
		} else if (e.target.id === "price-to-input") {
			setFilter({
				...filter,
				priceRange: {
					...filter.priceRange,
					priceTo: Number(e.target.value),
				},
			});
		}
	};
	return (
		<>
			<span className="filter-container__price-range-span">Price range</span>
			<div className="filter-container__price-range-inputs-container">
				<span>From: </span>
				<input
					type="number"
					id="price-from-input"
					onChange={handlePriceRangeInputs}
				></input>
				<span> To: </span>
				<input
					type="number"
					id="price-to-input"
					onChange={handlePriceRangeInputs}
				></input>
			</div>
		</>
	);
};

export default FilterPriceRange;
