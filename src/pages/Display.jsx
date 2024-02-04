import React from "react";
import "../style/css/productPages.css";
import FilterWindow from "../components/filter/FilterWindow";
import FilterWindowMobile from "../components/filter/FilterWindowMobile";
import ProductsDisplayPage from "../components/displaypage/ProductsDisplayPage";
import InstallmentOffer from "../components/InstallmentOffer";
import QuestionsGeneral from "../components/QuestionsGeneral";
import Media from "react-media";

const Display = () => {
	return (
		<>
			<div className="navigator-description-container">
				<span className="navigator-description-container__arrow-span">
					{" "}
					&#8594;{" "}
				</span>
				<h2 className="navigator-description-container__header">Display</h2>
			</div>
			<div className="main-product-container">
				<Media query="(min-width: 992px)">
					{(matches) => {
						return matches ? (
							<FilterWindow page={"display-page"} />
						) : (
							<FilterWindowMobile page={"display-page"} />
						);
					}}
				</Media>
				<ProductsDisplayPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Display;
