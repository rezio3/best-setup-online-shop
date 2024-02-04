import React from "react";
import FilterWindow from "../components/filter/FilterWindow";
import FilterWindowMobile from "../components/filter/FilterWindowMobile";
import ProductsPcPage from "../components/pcpage/ProductsPcPage";
import InstallmentOffer from "../components/InstallmentOffer";
import QuestionsGeneral from "../components/QuestionsGeneral";
import Media from "react-media";

const Pc = () => {
	return (
		<>
			<div className="navigator-description-container">
				<span className="navigator-description-container__arrow-span">
					{" "}
					&#8594;{" "}
				</span>
				<h2 className="navigator-description-container__header">PC</h2>
			</div>
			<div className="main-product-container">
				<Media query="(min-width: 992px)">
					{(matches) => {
						return matches ? (
							<FilterWindow page={"pc-page"} />
						) : (
							<FilterWindowMobile page={"pc-page"} />
						);
					}}
				</Media>
				<ProductsPcPage />
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default Pc;
