import React, { useEffect, useState, useRef } from "react";
import "../style/css/filterWindow.css";
const FilterWindow = () => {
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

	return (
		<>
			<div className="filter-threshold" ref={filterRef}></div>
			<div
				className={
					snapFilter ? "filter-container filter-sticky" : "filter-container"
				}
			>
				<div className="filter-padding-container">
					<h5 className="filter-container__filter-header">Filter</h5>
					<ul>
						<li className="filter-container__filter-checkbox-element">
							<input
								type="checkbox"
								className="filter-container__filter-checkbox"
								id="displays"
							></input>
							<label for="displays">Displays</label>
						</li>
						<li className="filter-container__filter-checkbox-element">
							<input
								type="checkbox"
								className="filter-container__filter-checkbox"
								id="sound"
							></input>
							<label for="sound">Sound</label>
						</li>
						<li className="filter-container__filter-checkbox-element">
							<input
								type="checkbox"
								className="filter-container__filter-checkbox"
								id="pc"
							></input>
							<label for="pc">PC</label>
						</li>
						<li className="filter-container__filter-checkbox-element">
							<input
								type="checkbox"
								className="filter-container__filter-checkbox"
								id="accesories"
							></input>
							<label for="accesories">Accesories</label>
						</li>
						<li className="filter-container__filter-checkbox-element">
							<input
								type="checkbox"
								className="filter-container__filter-checkbox"
								id="comfort"
							></input>
							<label for="comfort">Comfort</label>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default FilterWindow;
