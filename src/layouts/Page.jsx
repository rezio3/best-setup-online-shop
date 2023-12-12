import React from "react";
import Home from "../pages/Home";
import FilterProductsContext from "../context/FilterContext";
import Display from "../pages/Display";

const Page = () => {
	return (
		<>
			<FilterProductsContext>
				<Home />
				<Display />
			</FilterProductsContext>
		</>
	);
};

export default Page;
