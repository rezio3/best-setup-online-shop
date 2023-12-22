import React from "react";
import FilterWindowGeneral from "../components/filter/FilterWindowGeneral";
import ProductsAccessoriesPage from "../components/accessoriespage/ProductsAccessoriesPage";
import InstallmentOffer from "../components/InstallmentOffer";
import QuestionsGeneral from "../components/QuestionsGeneral";

const Accessories = () => {
	return (
		<>
			<div className="navigator-description-container">
				<span className="navigator-description-container__arrow-span">
					{" "}
					&#8594;{" "}
				</span>
				<h2 className="navigator-description-container__header">Accessories</h2>
			</div>
			<div className="main-product-container">
				<FilterWindowGeneral page={"accessories-page"} />
				<ProductsAccessoriesPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Accessories;
