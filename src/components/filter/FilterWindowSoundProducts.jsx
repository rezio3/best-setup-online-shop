import React, { useContext } from "react";
import FilterCheckboxElement from "./FilterCheckboxElement";
import { FilterContext } from "../../context/FilterContext";
import { soundPageCheckboxesNames } from "../../objects/filterCheckboxes";

const FilterWindowSoundProducts = () => {
	const [filter, setFilter] = useContext(FilterContext);

	let soundPageCheckboxes = [];
	for (let i = 0; i < soundPageCheckboxesNames.length; i++) {
		let data;
		let subtitle;
		if (i == 0) {
			data = "appliedFiltersSoundsType";
			subtitle = "Type";
		} else if (i === 1) {
			data = "appliedFiltersSoundsSet";
			subtitle = "Speakers set";
		}
		if (i === 0) {
			soundPageCheckboxes.push(
				<ul>
					<span className="filter-container__subtitle">{subtitle}</span>
					{soundPageCheckboxesNames[0].map((e) => {
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
		} else if (
			i === 1 &&
			filter.appliedFiltersSoundsType.some((e) => e === "speakers")
		) {
			soundPageCheckboxes.push(
				<ul>
					<span className="filter-container__subtitle">{subtitle}</span>
					{soundPageCheckboxesNames[1].map((e) => {
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
	}

	return <>{soundPageCheckboxes}</>;
};

export default FilterWindowSoundProducts;
