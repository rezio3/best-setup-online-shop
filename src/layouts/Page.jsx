import React from "react";
import Home from "../pages/Home";
import FilterProductsContext from "../context/FilterContext";

const Page = () => {
	return (
		<>
			<FilterProductsContext>
				<Home />
			</FilterProductsContext>
		</>
	);
};

export default Page;
