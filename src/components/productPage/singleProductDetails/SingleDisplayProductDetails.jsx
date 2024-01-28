import React from "react";

const SingleDisplayProductDetails = (props) => {
	const { singleProduct } = props;
	return (
		<>
			<div className="product-header-container__product-details-header">
				<h3>{singleProduct.name}</h3>

				<div>
					<span>Resolution: </span>
					<span>{singleProduct.resolution}</span>
				</div>
				<div>
					<span>Refresh rate: </span>
					<span>{singleProduct.fps}</span>
				</div>
				<div>
					<span>Size: </span>
					<span>{singleProduct.size}</span>
				</div>
			</div>
		</>
	);
};

export default SingleDisplayProductDetails;
