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
import OrderForm from "../components/orderform/OrderForm";
import SummaryPage from "../components/summarypage/SummaryPage";
import SingleProductPage from "../components/productPage/SingleProductPage";

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
					<Route path="/cart/delivery" Component={OrderForm} />
					<Route path="/summary" Component={SummaryPage} />
					<Route
						path="/product/:page/:productId"
						Component={SingleProductPage}
					/>
				</Routes>
			</FilterProductsContext>
		</>
	);
};

export default Page;
