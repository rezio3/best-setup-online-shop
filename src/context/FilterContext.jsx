import React, { createContext, useState } from "react";

const filterSettings = {
	appliedFilters: [],
	priceUp: false,
	priceDown: false,
	priceRange: {
		priceFrom: "",
		priceTo: "",
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
