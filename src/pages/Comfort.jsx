import React from "react";
import FilterWindowGeneral from "../components/filter/FilterWindowGeneral";
import ProductsComfortPage from "../components/comfortpage/ProductsComfortPage";
import InstallmentOffer from "../components/InstallmentOffer";

const Comfort = () => {
	return (
		<>
			<div className="navigator-description-container">
				<span className="navigator-description-container__arrow-span">
					{" "}
					&#8594;{" "}
				</span>
				<h2 className="navigator-description-container__header">Comfort</h2>
			</div>
			<div className="main-product-container">
				<FilterWindowGeneral page={"comfort-page"} />
				<ProductsComfortPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Comfort;
