import React from "react";
import FilterWindow from "../components/FilterWindow";

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
				<FilterWindow page={"display-page"} />
				<ProductsComfortPage />
			</div>
		</>
	);
};

export default Comfort;
