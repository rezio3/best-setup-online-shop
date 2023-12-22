import React from "react";
import "../style/css/productPages.css";
import FilterWindowGeneral from "../components/filter/FilterWindowGeneral";
import ProductsDisplayPage from "../components/displaypage/ProductsDisplayPage";
import InstallmentOffer from "../components/InstallmentOffer";

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
				<FilterWindowGeneral page={"display-page"} />
				<ProductsDisplayPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Display;
