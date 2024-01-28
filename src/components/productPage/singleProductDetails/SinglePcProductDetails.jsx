import React from "react";

const SinglePcProductDetails = (props) => {
	const { singleProduct } = props;
	return (
		<>
			<div className="product-header-container__product-details-header">
				<h3>{singleProduct.name}</h3>

				<div>
					<span>CPU: </span>
					<span>{singleProduct.cpu}</span>
				</div>
				<div>
					<span>RAM: </span>
					<span>{singleProduct.ram}</span>
				</div>
				<div>
					<span>Memory: </span>
					<span>{singleProduct.memory}</span>
				</div>
				<div>
					<span>GPU: </span>
					<span>{singleProduct.gpu}</span>
				</div>
			</div>
		</>
	);
};

export default SinglePcProductDetails;
