import React from "react";
import Home from "../pages/Home";
import FilterProductsContext from "../context/FilterContext";
import Display from "../pages/Display";
import { Route, Routes } from "react-router-dom";
import Sound from "../pages/Sound";
import Pc from "../pages/Pc";
import Accessories from "../pages/Accessories";
import Comfort from "../pages/Comfort";
import CartPage from "../components/cart/CartPage";

const Page = () => {
	return (
		<>
			<FilterProductsContext>
				<Routes>
					<Route path="/" exact Component={Home} />
					<Route path="/display" Component={Display} />
					<Route path="/sound" Component={Sound} />
					<Route path="/pc" Component={Pc} />
					<Route path="/accessories" Component={Accessories} />
					<Route path="/comfort" Component={Comfort} />
					<Route path="/cart" Component={CartPage} />
				</Routes>
			</FilterProductsContext>
		</>
	);
};

export default Page;
