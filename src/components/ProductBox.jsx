import React, { useContext, useRef } from "react";
import { gsap } from "gsap";
import "../style/css/buttonsAnim.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProductsOrderContext } from "../context/OrderContext";

const ProductBox = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	let productImage = useRef(null);

	// product hover animation
	const handleHover = () => {
		gsap.to(productImage, { scale: 1.15, duration: 0.3, ease: "expo" });
	};
	const handleHoverOut = () => {
		gsap.to(productImage, { scale: 1, duration: 0.3, ease: "expo" });
	};

	// print stars
	let printStars = [];
	for (let i = 0; i < props.product.stars; i++) {
		printStars.push(
			<FontAwesomeIcon
				icon={faStarSolid}
				className="highlight"
				key={i + "starSolid"}
			/>
		);
	}
	for (let i = 0; i < 5 - props.product.stars; i++) {
		printStars.push(
			<FontAwesomeIcon
				icon={faStarRegular}
				className="highlight"
				key={i + "starRegular"}
			/>
		);
	}

	const addToCartHandler = () => {
		setOrder({
			...order,
			cart: [...order.cart, props.product],
		});
	};

	return (
		<>
			<div
				className="product-box"
				onMouseEnter={handleHover}
				onMouseLeave={handleHoverOut}
			>
				<div className="product-box__product-image-container">
					<img
						// src={productsImages[props.product.img - 1]}
						src={props.product.img}
						alt="product"
						className="product-box__product-image"
						ref={(el) => (productImage = el)}
					/>
				</div>
				<h5 className="product-box__product-name">{props.product.name}</h5>

				<div className="product-box__price-and-buy-btn">
					<span className="product-box__price-span">
						{props.product.price} $
					</span>
					<button
						className="product-box__buy-btn button-anim"
						onClick={addToCartHandler}
					>
						Add to cart
					</button>
				</div>
				<div className="product-box__stars-and-opinions-container">
					<div>{printStars}</div>

					<span className="product-box__opinions-span">
						{props.product.opinions} reviews
					</span>
				</div>
				<span className="product-box__read-more">
					READ MORE{" "}
					<FontAwesomeIcon icon={faArrowRight} className="highlight" />
				</span>
			</div>
		</>
	);
};

export default ProductBox;
