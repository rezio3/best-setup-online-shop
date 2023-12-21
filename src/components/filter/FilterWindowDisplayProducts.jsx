import React, { useContext } from "react";
import FilterCheckboxElement from "./FilterCheckboxElement";
import { FilterContext } from "../../context/FilterContext";
import { displayPageCheckboxesNames } from "../../objects/filterCheckboxes";

const FilterWindowDisplayProducts = (props) => {
	const [filter, setFilter] = useContext(FilterContext);

	const displayPageCheckboxesResolution = (
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
	);
	const displayPageCheckboxesFps = (
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
	);

	const displayPageCheckboxesSize = (
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
	);
	return (
		<>
			{displayPageCheckboxesResolution}
			{displayPageCheckboxesFps}
			{displayPageCheckboxesSize}
		</>
	);
};

export default FilterWindowDisplayProducts;
