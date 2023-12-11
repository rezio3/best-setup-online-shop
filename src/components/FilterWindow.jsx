import React, { useEffect, useState, useRef, useContext } from "react";
import "../style/css/filterWindow.css";
import "../style/css/buttonsAnim.css";
import FilterCheckboxElement from "./FilterCheckboxElement";
import FilterCheckboxPriceDirection from "./FilterCheckboxPriceDirection";
import { FilterContext } from "../context/FilterContext";

const FilterWindow = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const [filterStart] = useState(filter);

	const resetButtonHandler = () => {
		setFilter(filterStart);
	};

	// snap filter while scrolling
	const [snapFilter, setSnapFilter] = useState(false);
	const filterRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				entry.intersectionRatio === 0
					? setSnapFilter(true)
					: setSnapFilter(false);
			},
			{ threshold: 1, rootMargin: "-110px 0px 0px 0px" }
		);
		observer.observe(filterRef.current);
	}, []);

	// array of checkboxes
	const checkboxesNames = [
		{ name: "Displays", id: "displays" },
		{ name: "Sounds", id: "sounds" },
		{ name: "PC", id: "pc" },
		{ name: "Accessories", id: "accessories" },
		{ name: "Comfort", id: "comfort" },
	];

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
			<div className="filter-snap-threshold" ref={filterRef}></div>
			<div
				className={
					snapFilter ? "filter-container filter-sticky" : "filter-container"
				}
			>
				<div className="filter-padding-container">
					<h5 className="filter-container__filter-header">Filter</h5>
					<ul>
						{checkboxesNames.map((e) => {
							return (
								<FilterCheckboxElement
									name={e.name}
									id={e.id}
									key={e.id}
									filterState={{ filter, setFilter }}
								/>
							);
						})}
					</ul>
					<span className="filter-container__price-range-span">
						Price range
					</span>
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
					<ul>
						<FilterCheckboxPriceDirection filterState={{ filter, setFilter }} />
					</ul>
					<button
						className="filter-container__reset-button button-anim"
						onClick={resetButtonHandler}
					>
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default FilterWindow;
