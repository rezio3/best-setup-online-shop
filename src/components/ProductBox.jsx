import React, { useRef } from "react";
import { gsap } from "gsap";
import "../style/css/buttonsAnim.css";
import img1 from "../img/products/Dell-SE2422H.webp";
import img2 from "../img/products/G4M3R-HERO.webp";
import img3 from "../img/products/Genesis-Xenon-220-G2-RGB.webp";
import img4 from "../img/products/Gigabyte-M32QC-Curved-HDR-KVM.webp";
import img5 from "../img/products/LG-Ultrawide-34WP65CP-B.webp";
import img6 from "../img/products/Razer-Ornata-V2.webp";
import img7 from "../img/products/Samsung-Odyssey-C34G55TWWPX.webp";
import img8 from "../img/products/Logitech-G502-HERO.webp";
import img9 from "../img/products/Silver-Monkey-X-Mandrill.webp";
import img10 from "../img/products/Logitech-G502-X-PLUS.webp";
import img11 from "../img/products/Logitech-LIFT.webp";
import img12 from "../img/products/Samsung-QE65Q77B.webp";
import img13 from "../img/products/Cougar Argo One Blackorange.jpg";
import img14 from "../img/products/Genesis Głośniki Helium 800BT 60W 2.1 ARGB.jpg";
import img15 from "../img/products/Silver Monkey Fotel biurowy SMO-650.webp";
import img16 from "../img/products/Edifier 2.1 C2XD.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductBox = (props) => {
	const productsImages = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
	];
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
			<FontAwesomeIcon icon={faStarSolid} className="highlight" />
		);
	}
	for (let i = 0; i < 5 - props.product.stars; i++) {
		printStars.push(
			<FontAwesomeIcon icon={faStarRegular} className="highlight" />
		);
	}
	return (
		<>
			<div
				className="product-box"
				onMouseEnter={handleHover}
				onMouseLeave={handleHoverOut}
			>
				<img
					src={productsImages[props.product.img - 1]}
					alt="product-image"
					className="product-box__product-image"
					ref={(el) => (productImage = el)}
				/>
				<h5 className="product-box__product-name">{props.product.name}</h5>

				<div className="product-box__price-and-buy-btn">
					<span className="product-box__price-span">{props.product.price}</span>
					<button className="product-box__buy-btn button-anim">
						Add to cart
					</button>
				</div>
				<div className="product-box__stars-and-opinions-container">
					<div> {printStars}</div>

					<span className="product-box__opinions-span">
						{props.product.opinions} opinions
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
