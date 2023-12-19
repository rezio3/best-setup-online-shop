import React from "react";
import FilterWindow from "../components/FilterWindow";
import ProductsSoundPage from "../components/soundpage/ProductsSoundPage";

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
				<FilterWindow page={"sounds-page"} />
				<ProductsSoundPage />
			</div>
		</>
	);
};

export default Sound;
