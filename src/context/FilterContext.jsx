import React, { createContext, useState } from "react";

const filterSettings = {
	displays: false,
	sounds: false,
	pc: false,
	accessories: false,
	comfort: false,
	priceUp: false,
	priceDown: false,
	priceRange: {
		priceFrom: 0,
		priceTo: 0,
	},
};

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
