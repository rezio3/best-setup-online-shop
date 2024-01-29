import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const RecommendedProduct = (props) => {
	let productImage = useRef(null);
	// product hover animation
	const handleHover = () => {
		gsap.to(productImage, { scale: 1.15, duration: 0.3, ease: "ease" });
	};
	const handleHoverOut = () => {
		gsap.to(productImage, { scale: 1, duration: 0.3, ease: "ease" });
	};
	return (
		<>
			<NavLink to={`/product/hotDeals/${props.product.productId}`}>
				<div
					className="recommended-product-box"
					onMouseEnter={handleHover}
					onMouseLeave={handleHoverOut}
				>
					<div className="recommended-product-box__product-image-container">
						<img
							src={props.product.img}
							alt="recommended-product"
							className="recommended-product-box__product-image"
							ref={(el) => (productImage = el)}
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
			</NavLink>
		</>
	);
};

export default RecommendedProduct;
