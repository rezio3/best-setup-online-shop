import React from "react";

const DisplayProduct = (props) => {
	const { singleProduct } = props;

	return (
		<>
			<div className="product-header-container">
				<img
					src={singleProduct.img}
					className="product-header-container__product-image"
				/>
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
				<div className="product-header-container__price-and-buy-box"></div>
			</div>
		</>
	);
};

export default DisplayProduct;
