import React from "react";
import FilterWindow from "../components/FilterWindow";
import ProductsAccessoriesPage from "../components/accessoriespage/ProductsAccessoriesPage";

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
				<FilterWindow page={"accessories-page"} />
				<ProductsAccessoriesPage />
			</div>
		</>
	);
};

export default Accessories;
