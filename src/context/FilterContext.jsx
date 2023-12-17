import React, { createContext, useState } from "react";

export const defaultFilterSettings = {
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
	const [filter, setFilter] = useState(defaultFilterSettings);

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterProductsContext;
