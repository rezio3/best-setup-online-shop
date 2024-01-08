import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RecommendedProduct = (props) => {
	return (
		<>
			<div className="recommended-product-box">
				<div className="recommended-product-box__product-image-container">
					<img
						src={props.product.img}
						alt="recommended-product"
						className="recommended-product-box__product-image"
					/>
				</div>
				<span className="recommended-product-box__product-name">
					{props.product.name}
				</span>
				<span className="recommended-product-box__read-more">
					READ MORE{" "}
					<FontAwesomeIcon icon={faArrowRight} className="highlight" />
				</span>
			</div>
		</>
	);
};

export default RecommendedProduct;
