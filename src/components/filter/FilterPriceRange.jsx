import React from "react";

const FilterPriceRange = (props) => {
	const { filter, setFilter } = props.filterState;
	const handlePriceRangeInputs = (e) => {
		if (e.target.id === "price-from-input") {
			setFilter({
				...filter,
				priceRange: {
					...filter.priceRange,
					priceFrom: e.target.value,
				},
			});
		} else if (e.target.id === "price-to-input") {
			setFilter({
				...filter,
				priceRange: {
					...filter.priceRange,
					priceTo: e.target.value,
				},
			});
		}
	};
	return (
		<>
			<span className="filter-container__subtitle">Price range</span>
			<div className="filter-container__price-range-inputs-container">
				<span>From: </span>
				<input
					type="number"
					id="price-from-input"
					onChange={handlePriceRangeInputs}
					value={filter.priceRange.priceFrom}
				></input>
				<span> To: </span>
				<input
					type="number"
					id="price-to-input"
					onChange={handlePriceRangeInputs}
					value={filter.priceRange.priceTo}
				></input>
			</div>
		</>
	);
};

export default FilterPriceRange;
