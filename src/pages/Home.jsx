import React from "react";
import "../style/css/home.css";
import FilterWindow from "../components/FilterWindow";
import ProductsHomePage from "../components/ProductsHomePage";

const Home = () => {
	return (
		<>
			<div className="main-home-page-container">
				<FilterWindow />
				<ProductsHomePage />
			</div>
		</>
	);
};

export default Home;
