import React, { useContext } from "react";
import FilterCheckboxElement from "./FilterCheckboxElement";
import { FilterContext } from "../../context/FilterContext";
import { displayPageCheckboxesNames } from "../../objects/filterCheckboxes";

const FilterWindowDisplayProducts = () => {
	const [filter, setFilter] = useContext(FilterContext);

	let displayPageCheckboxes = [];
	for (let i = 0; i < displayPageCheckboxesNames.length; i++) {
		// console.log(i);
		let data;
		let subtitle;
		if (i == 0) {
			data = "appliedFiltersDisplaysResolution";
			subtitle = "Resolution";
		} else if (i === 1) {
			data = "appliedFiltersDisplaysFps";
			subtitle = "FPS";
		} else if (i === 2) {
			data = "appliedFiltersDisplaysSize";
			subtitle = "Size";
		}

		displayPageCheckboxes.push(
			<ul>
				<span className="filter-container__subtitle">{subtitle}</span>
				{displayPageCheckboxesNames[i].map((e) => {
					return (
						<FilterCheckboxElement
							name={e.name}
							id={e.id}
							key={e.id}
							data={data}
							filterState={{ filter, setFilter }}
						/>
					);
				})}
			</ul>
		);
	}

	return <>{displayPageCheckboxes}</>;
};

export default FilterWindowDisplayProducts;
