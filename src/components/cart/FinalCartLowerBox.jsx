import React, { useEffect, useRef, useState } from "react";
import "../../style/css/finalCartLowerBox.css";
import GuaranteeBox from "./GuaranteeBox";
import guaranteeBoxesArray from "../../objects/guaranteeDelivery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import products from "../../objects/products";
import RecommendedProduct from "./RecommendedProduct";
import { useLocation } from "react-router-dom";

const FinalCartLowerBox = () => {
	const [recommendArr, setRecommendArr] = useState([]);
	const carouselRef = useRef(null);
	const location = useLocation();

	const limitRandomize = products.hotDeals.length - 1;
	let recommendedProductsArray = [];

	do {
		const randomNumber = Math.floor(Math.random() * limitRandomize);
		const selectedProduct = products.hotDeals[randomNumber];

		if (!recommendedProductsArray.includes(selectedProduct)) {
			recommendedProductsArray.push(selectedProduct);
		}
	} while (recommendedProductsArray.length < 10);

	useEffect(() => {
		setRecommendArr(recommendedProductsArray);
	}, [location.pathname]);

	const sideScrollHandler = (e) => {
		if (e.target.className.includes("left")) {
			carouselRef.current.scrollLeft -= 230;
		} else {
			carouselRef.current.scrollLeft += 230;
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
								key={e.firstText}
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
						<div
							className="recommended-products-carousel snaps-inline"
							ref={carouselRef}
						>
							{recommendArr.map((e) => (
								<RecommendedProduct product={e} key={e.product} />
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
