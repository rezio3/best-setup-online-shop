import React from "react";
import "../style/css/productPages.css";
import FilterWindow from "../components/filter/FilterWindow";
import FilterWindowMobile from "../components/filter/FilterWindowMobile";
import ProductsHomePage from "../components/homepage/ProductsHomePage";
import News from "../components/homepage/News";
import Media from "react-media";

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
				<Media query="(min-width: 992px)">
					{(matches) => {
						return matches ? (
							<FilterWindow page={"home-page"} />
						) : (
							<FilterWindowMobile page={"home-page"} />
						);
					}}
				</Media>
				<ProductsHomePage />
			</div>
			<News />
		</>
	);
};

export default Home;
