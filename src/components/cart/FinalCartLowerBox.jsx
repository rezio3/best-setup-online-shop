import React from "react";
import "../../style/css/finalCartLowerBox.css";
import GuaranteeBox from "./GuaranteeBox";
import guaranteeBoxesArray from "../../objects/guaranteeDelivery";

import products from "../../objects/products";
import RecommendedProduct from "./RecommendedProduct";

const FinalCartLowerBox = () => {
	const limitRandomize = products.hotDeals.length - 1;
	const recommendedProductsArray = [];

	do {
		const randomNumber = Math.floor(Math.random() * limitRandomize);
		const selectedProduct = products.hotDeals[randomNumber];

		if (!recommendedProductsArray.includes(selectedProduct)) {
			recommendedProductsArray.push(selectedProduct);
		}
	} while (recommendedProductsArray.length < 10);

	return (
		<>
			<div className="final-cart-lower-box-wrapper">
				<div className="guarantee-container">
					{guaranteeBoxesArray.map((e) => {
						return (
							<GuaranteeBox
								txt1={e.firstText}
								txt2={e.secondText}
								img={e.img}
							/>
						);
					})}
				</div>
				<div className="recommended-products-container">
					<h3 className="recommended-products-container__header">
						Recommended products
					</h3>
					<div className="recommended-products-carousel">
						{recommendedProductsArray.map((e) => (
							<RecommendedProduct product={e} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default FinalCartLowerBox;
