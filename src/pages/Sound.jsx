import React from "react";
import FilterWindowGeneral from "../components/filter/FilterWindowGeneral";
import ProductsSoundPage from "../components/soundpage/ProductsSoundPage";
import InstallmentOffer from "../components/InstallmentOffer";
import QuestionsGeneral from "../components/QuestionsGeneral";

const Sound = () => {
	return (
		<>
			<div className="navigator-description-container">
				<span className="navigator-description-container__arrow-span">
					{" "}
					&#8594;{" "}
				</span>
				<h2 className="navigator-description-container__header">Sound</h2>
			</div>
			<div className="main-product-container">
				<FilterWindowGeneral page={"sound-page"} />
				<ProductsSoundPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Sound;
