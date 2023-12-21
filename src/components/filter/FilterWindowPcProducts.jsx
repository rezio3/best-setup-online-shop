import React, { useContext } from "react";
import FilterCheckboxElement from "./FilterCheckboxElement";
import { FilterContext } from "../../context/FilterContext";
import { pcPageCheckboxesNames } from "../../objects/filterCheckboxes";

const FilterWindowPcProducts = () => {
	const [filter, setFilter] = useContext(FilterContext);

	let pcPageCheckboxes = [];
	for (let i = 0; i < pcPageCheckboxesNames.length; i++) {
		let data;
		let subtitle;
		if (i == 0) {
			data = "appliedFiltersPcCpu";
			subtitle = "CPU";
		} else if (i === 1) {
			data = "appliedFiltersPcRam";
			subtitle = "RAM";
		} else if (i === 2) {
			data = "appliedFiltersPcMemory";
			subtitle = "Disc memory";
		} else if (i === 3) {
			data = "appliedFiltersPcGpu";
			subtitle = "GPU";
		}

		pcPageCheckboxes.push(
			<ul>
				<span className="filter-container__subtitle">{subtitle}</span>
				{pcPageCheckboxesNames[i].map((e) => {
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

	return <>{pcPageCheckboxes}</>;
};

export default FilterWindowPcProducts;
