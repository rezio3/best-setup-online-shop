import React, { useEffect, useState, useRef, useContext } from "react";
import "../style/css/filterWindow.css";
import "../style/css/buttonsAnim.css";
import FilterCheckboxElement from "./FilterCheckboxElement";
import FilterCheckboxPriceDirection from "./FilterCheckboxPriceDirection";
import { FilterContext } from "../context/FilterContext";
import FilterPriceRange from "./FilterPriceRange";
import {
	homePageCheckboxesNames,
	displayPageCheckboxesNames,
	soundsPageCheckboxesNames,
	accessoriesPageCheckboxesNames,
} from "../objects/filterCheckboxes";
// import { useLocation } from "react-router-dom";

import { defaultFilterSettings } from "../context/FilterContext";

const FilterWindow = (props) => {
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

	const displayPageCheckboxesResolution =
		props.page === "display-page" ? (
			<ul>
				{displayPageCheckboxesNames[0].map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersDisplaysResolution"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;
	const displayPageCheckboxesFps =
		props.page === "display-page" ? (
			<ul>
				{displayPageCheckboxesNames[1].map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersDisplaysFps"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;

	const displayPageCheckboxesSize =
		props.page === "display-page" ? (
			<ul>
				{displayPageCheckboxesNames[2].map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersDisplaysSize"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;

	const soundsPageCheckboxesType =
		props.page === "sounds-page" ? (
			<ul>
				{soundsPageCheckboxesNames[0].map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersSoundsType"}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		) : null;
	const soundsPageCheckboxesSet =
		props.page === "sounds-page" ? (
			<ul>
				{soundsPageCheckboxesNames[1].map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={"appliedFiltersSoundsSet"}
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
					{homePageCheckboxes}
					{displayPageCheckboxesResolution}
					{displayPageCheckboxesFps}
					{displayPageCheckboxesSize}
					{soundsPageCheckboxesType}
					{soundsPageCheckboxesSet}
					{accessoriesPageCheckboxesType}
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

export default FilterWindow;
