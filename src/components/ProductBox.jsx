import React, { useRef } from "react";
import { gsap } from "gsap";
import img1 from "../img/products/Dell-SE2422H.webp";
import img2 from "../img/products/G4M3R-HERO.webp";
import img3 from "../img/products/Genesis-Xenon-220-G2-RGB.webp";
import img4 from "../img/products/Gigabyte-M32QC-Curved-HDR-KVM.webp";
import img5 from "../img/products/LG-Ultrawide-34WP65CP-B.webp";
import img6 from "../img/products/Razer-Ornata-V2.webp";
import img7 from "../img/products/Samsung-Odyssey-C34G55TWWPX.webp";
import img8 from "../img/products/Logitech-G502-HERO.webp";
import img9 from "../img/products/Silver-Monkey-X-Mandrill.webp";
import img10 from "../img/products/Genesis-Xenon-220-G2-RGB.webp";

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
	];
	let productImage = useRef(null);
	const handleHover = () => {
		gsap.to(productImage, { scale: 1.15, duration: 0.3, ease: "expo" });
	};
	const handleHoverOut = () => {
		gsap.to(productImage, { scale: 1, duration: 0.3, ease: "expo" });
	};
	return (
		<>
			<div
				className="products-container__product-box"
				onMouseEnter={handleHover}
				onMouseLeave={handleHoverOut}
			>
				<img
					src={productsImages[props.product.img - 1]}
					alt="product-image"
					className="products-container__product-image"
					ref={(el) => (productImage = el)}
				/>
				<h5 className="products-container__product-name">
					{props.product.name}
				</h5>
				<span>{props.product.price}</span>
			</div>
		</>
	);
};

export default ProductBox;
