import React from "react";
import FilterWindow from "../components/filter/FilterWindow";
import FilterWindowMobile from "../components/filter/FilterWindowMobile";
import ProductsComfortPage from "../components/comfortpage/ProductsComfortPage";
import InstallmentOffer from "../components/InstallmentOffer";
import QuestionsGeneral from "../components/QuestionsGeneral";
import Media from "react-media";

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
				<Media query="(min-width: 992px)">
					{(matches) => {
						return matches ? (
							<FilterWindow page={"comfort-page"} />
						) : (
							<FilterWindowMobile page={"comfort-page"} />
						);
					}}
				</Media>
				<ProductsComfortPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Comfort;
