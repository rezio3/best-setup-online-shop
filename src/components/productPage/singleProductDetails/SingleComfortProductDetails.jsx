import React from "react";

const SingleComfortProductDetails = (props) => {
	const { singleProduct } = props;
	let specification1span;
	let spec1info;
	if (singleProduct.type === "chair") {
		spec1info = singleProduct.color;
		specification1span = "Color: ";
	} else if (singleProduct.type === "desk") {
		spec1info = singleProduct.automatic;
		specification1span = "Automatic: ";
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
					<span>Size: </span>
					<span>{singleProduct.size}</span>
				</div>
				<div>
					<span>{specification1span}</span>
					<span>{spec1info}</span>
				</div>
			</div>
		</>
	);
};

export default SingleComfortProductDetails;
