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
import img17 from "../img/products/XIDAX Gaming PC S-200.png";
import img18 from "../img/products/ASUS Rog Strix Ultra wide.jpg";
import img19 from "../img/products/Sony WH-1000XM5.png";
import img20 from "../img/display/Acer Nitro EI242QRPbiipx.jpg";
import img21 from "../img/display/AOC C24G2AE.jpg";
import img22 from "../img/display/AOC CU34G2X BK.jpg";
import img23 from "../img/display/AOC Q27G2E BK.jpg";
import img24 from "../img/display/BenQ GW2480.jpg";
import img25 from "../img/display/Dell Alienware AW3423DWF OLED 210-BFRQ.jpg";
import img26 from "../img/display/Gigabyte G24F 2.jpg";
import img27 from "../img/display/Gigabyte G27Q.jpg";
import img28 from "../img/display/Gigabyte G27QC A.jpg";
import img29 from "../img/display/iiyama G-Master G2470HSU-B1 Red Eagle.jpg";
import img30 from "../img/display/iiyama ProLite XU2494HSU-B2.jpg";
import img31 from "../img/display/Lenovo G24e-20.jpg";
import img32 from "../img/display/LG 24MR400-B.jpg";
import img33 from "../img/display/LG UltraGear 27GP850P-B.jpg";
import img34 from "../img/display/LG UltraGear 27GR75Q-B.jpg";
import img35 from "../img/display/LG UltraGear OLED 45GR95QE-B.jpg";
import img36 from "../img/display/LG UltraWide 29WP60G.jpg";
import img37 from "../img/display/Philips E-line 242E1GAJ.jpg";
import img38 from "../img/display/Philips E-line 276E8VJSB.jpg";
import img39 from "../img/display/Philips V-line 243V7QDAB.jpg";
import img40 from "../img/display/Samsung Odyssey G32A.jpg";
import img41 from "../img/display/Samsung Odyssey Neo G9.jpg";
import img42 from "../img/display/Samsung UJ590.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductBox = (props) => {
	const productsImages = [
		//hot deals
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
		img17,
		img18,
		img19,
		//display
		img20,
		img21,
		img22,
		img23,
		img24,
		img25,
		img26,
		img27,
		img28,
		img29,
		img30,
		img31,
		img32,
		img33,
		img34,
		img35,
		img36,
		img37,
		img38,
		img39,
		img40,
		img41,
		img42,
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
	return (
		<>
			<div
				className="product-box"
				onMouseEnter={handleHover}
				onMouseLeave={handleHoverOut}
			>
				<div className="product-box__product-image-container">
					<img
						src={productsImages[props.product.img - 1]}
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
					<button className="product-box__buy-btn button-anim">
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
