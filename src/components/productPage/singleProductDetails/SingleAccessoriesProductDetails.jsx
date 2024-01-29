import React from "react";

const SingleAccessoriesProductDetails = (props) => {
	const { singleProduct } = props;
	let specification1span;
	let specification2span;
	let spec1info;
	let spec2info;
	if (singleProduct.type === "mouse" || singleProduct.type === "keyboard") {
		specification1span = "Wireless: ";
		specification2span = "RGB: ";
		spec1info = singleProduct.wireless;
		spec2info = singleProduct.rgb;
	} else if (singleProduct.type === "printer") {
		specification1span = "Printing: ";
		specification2span = "Format: ";
		spec1info = singleProduct.printing;
		spec2info = singleProduct.format;
	}
	return (
		<>
			<div className="product-header-container__product-details-header">
				<h3>{singleProduct.name}</h3>
				<span className="product-header-container__specification-span">
					Specification
				</span>
				<div>
					<span>Type: </span>
					<span>{singleProduct.type}</span>
				</div>
				<div>
					<span>{specification1span}</span>
					<span>{spec1info}</span>
				</div>
				<div>
					<span>{specification2span}</span>
					<span>{spec2info}</span>
				</div>
			</div>
		</>
	);
};

export default SingleAccessoriesProductDetails;
