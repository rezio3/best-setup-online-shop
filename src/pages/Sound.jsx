import React from "react";
import FilterWindow from "../components/filter/FilterWindow";
import FilterWindowMobile from "../components/filter/FilterWindowMobile";
import ProductsSoundPage from "../components/soundpage/ProductsSoundPage";
import InstallmentOffer from "../components/InstallmentOffer";
import QuestionsGeneral from "../components/QuestionsGeneral";
import Media from "react-media";

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
				<Media query="(min-width: 992px)">
					{(matches) => {
						return matches ? (
							<FilterWindow page={"sound-page"} />
						) : (
							<FilterWindowMobile page={"sound-page"} />
						);
					}}
				</Media>
				<ProductsSoundPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Sound;
