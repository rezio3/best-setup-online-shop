import React from "react";
import "../style/css/productPages.css";
import FilterWindowGeneral from "../components/filter/FilterWindowGeneral";
import ProductsHomePage from "../components/homepage/ProductsHomePage";
import News from "../components/homepage/News";

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
			<div className="main-product-container">
				<FilterWindowGeneral page={"home-page"} />
				<ProductsHomePage />
			</div>
			<News />
		</>
	);
};

export default Home;
