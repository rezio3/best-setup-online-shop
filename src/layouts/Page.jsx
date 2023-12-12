import React from "react";
import Home from "../pages/Home";
import FilterProductsContext from "../context/FilterContext";
import Display from "../pages/Display";
import { Route, Routes } from "react-router-dom";

const Page = () => {
	return (
		<>
			<FilterProductsContext>
				<Routes>
					<Route path="/" exact Component={Home} />
					<Route path="/display" Component={Display} />
				</Routes>
			</FilterProductsContext>
		</>
	);
};

export default Page;
