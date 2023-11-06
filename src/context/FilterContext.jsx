import React, { createContext, useState } from "react";

const filterSettings = {
	Displays: false,
	Sounds: false,
	PC: false,
	Accessories: false,
	Comfort: false,
	priceRange: null,
};

// CHANGE VARIABLES TO LOWERCASE

export const FilterContext = createContext();

const FilterProductsContext = ({ children }) => {
	const [filter, setFilter] = useState(filterSettings);

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterProductsContext;
