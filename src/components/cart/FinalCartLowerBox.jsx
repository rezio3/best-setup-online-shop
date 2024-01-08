import React, { useRef } from "react";
import "../../style/css/finalCartLowerBox.css";
import GuaranteeBox from "./GuaranteeBox";
import guaranteeBoxesArray from "../../objects/guaranteeDelivery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import products from "../../objects/products";
import RecommendedProduct from "./RecommendedProduct";

const FinalCartLowerBox = () => {
	const carouselRef = useRef(null);

	const limitRandomize = products.hotDeals.length - 1;
	const recommendedProductsArray = [];

	do {
		const randomNumber = Math.floor(Math.random() * limitRandomize);
		const selectedProduct = products.hotDeals[randomNumber];

		if (!recommendedProductsArray.includes(selectedProduct)) {
			recommendedProductsArray.push(selectedProduct);
		}
	} while (recommendedProductsArray.length < 10);

	const sideScrollHandler = (e) => {
		if (e.target.className.includes("left")) {
			carouselRef.current.scrollBy(-220, 0);
		} else {
			carouselRef.current.scrollLeft += 220;
		}
	};

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
					<div className="recommended-products-carousel-container">
						<button
							className="recommended-products-carousel-container__arrow-btn arrow-left-btn"
							onClick={sideScrollHandler}
						>
							<FontAwesomeIcon icon={faAngleLeft} className="arrow-icon" />
						</button>
						<div className="recommended-products-carousel" ref={carouselRef}>
							{recommendedProductsArray.map((e) => (
								<RecommendedProduct product={e} />
							))}
						</div>
						<button
							className="recommended-products-carousel-container__arrow-btn arrow-right-btn"
							onClick={sideScrollHandler}
						>
							<FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FinalCartLowerBox;
