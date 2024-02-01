import React, { useEffect, useState, useRef, useContext } from "react";
import "../../style/css/filterWindow.css";
import "../../style/css/buttonsAnim.css";
import FilterCheckboxElement from "./FilterCheckboxElement";
import FilterCheckboxPriceDirection from "./FilterCheckboxPriceDirection";
import { FilterContext } from "../../context/FilterContext";
import FilterPriceRange from "./FilterPriceRange";
import {
	homePageCheckboxesNames,
	accessoriesPageCheckboxesNames,
	comfortPageCheckboxesNames,
} from "../../objects/filterCheckboxes";
import "../../style/css/scrollCustom.css";
// import { useLocation } from "react-router-dom";

import { defaultFilterSettings } from "../../context/FilterContext";
import FilterWindowDisplayProducts from "./FilterWindowDisplayProducts";
import FilterWindowSoundProducts from "./FilterWindowSoundProducts";
import FilterWindowPcProducts from "./FilterWindowPcProducts";

const FilterWindowMobile = (props) => {
	const [filter, setFilter] = useContext(FilterContext);

	const resetButtonHandler = () => {
		setFilter(defaultFilterSettings);
	};
	// Setting that allows resetting the filter every time the user changes the page.
	// let location = useLocation;
	// useEffect(() => {
	// 	resetButtonHandler();
	// }, [location]);

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

	const homePageCheckboxes =
		props.page === "home-page" ? (
			<ul>
				{homePageCheckboxesNames.map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersHomePage"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;

	const accessoriesPageCheckboxesType =
		props.page === "accessories-page" ? (
			<ul>
				{accessoriesPageCheckboxesNames.map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersAccessoriesType"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;
	const comfortPageCheckboxesType =
		props.page === "comfort-page" ? (
			<ul>
				{comfortPageCheckboxesNames.map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersComfortType"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;

	return (
		<>
			<div className="filter-snap-threshold" ref={filterRef}></div>
			<div
				className={
					snapFilter
						? "filter-container filter-scroll filter-sticky"
						: "filter-container filter-scroll"
				}
			>
				<div className="filter-padding-container">
					<h5 className="filter-container__filter-header">Filter</h5>
					{homePageCheckboxes}
					{props.page === "display-page" ? (
						<FilterWindowDisplayProducts />
					) : null}
					{props.page === "sound-page" ? <FilterWindowSoundProducts /> : null}
					{props.page === "pc-page" ? <FilterWindowPcProducts /> : null}
					{accessoriesPageCheckboxesType}
					{comfortPageCheckboxesType}
					<FilterPriceRange filterState={{ filter, setFilter }} />
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

export default FilterWindowMobile;
