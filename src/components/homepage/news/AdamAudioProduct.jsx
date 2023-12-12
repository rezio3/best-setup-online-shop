import React, { useRef } from "react";
import { gsap } from "gsap";

const AdamAudioProduct = (props) => {
	let productImage = useRef(null);

	const handleHover = () => {
		gsap.to(productImage, { scale: 1.1, duration: 0.3, ease: "expo" });
	};
	const handleHoverOut = () => {
		gsap.to(productImage, { scale: 1, duration: 0.3, ease: "expo" });
	};

	return (
		<>
			<div
				className="adam-audio-container__image-box adam-audio-img-box"
				onMouseEnter={handleHover}
				onMouseLeave={handleHoverOut}
			>
				<img
					src={props.image}
					alt={props.name}
					id={props.name}
					className="adam-audio-img-box__adam-image"
					ref={(el) => (productImage = el)}
				/>
				<h4 className="adam-audio-img-box__header">{props.name}</h4>
				<span className="adam-audio-img-box__description">
					{props.description}
				</span>
			</div>
		</>
	);
};

export default AdamAudioProduct;
