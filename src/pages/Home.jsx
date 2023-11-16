import React from "react";
import "../style/css/home.css";
import FilterWindow from "../components/FilterWindow";
import ProductsHomePage from "../components/ProductsHomePage";
import News from "../components/News";

const Home = () => {
	return (
		<>
			<div className="navigator-description-container">
				<span className="navigator-description-container__arrow-span">
					{" "}
					&#8594;{" "}
				</span>
				<h2 className="navigator-description-container__header">Hot deals</h2>
			</div>
			<div className="main-home-page-container">
				<FilterWindow />
				<ProductsHomePage />
			</div>
			<News />
		</>
	);
};

export default Home;
