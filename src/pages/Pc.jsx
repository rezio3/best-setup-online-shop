import React from "react";
import FilterWindowGeneral from "../components/filter/FilterWindowGeneral";
import ProductsPcPage from "../components/pcpage/ProductsPcPage";
import InstallmentOffer from "../components/InstallmentOffer";

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
				<FilterWindowGeneral page={"pc-page"} />
				<ProductsPcPage />
			</div>
			<InstallmentOffer />
		</>
	);
};

export default Pc;
