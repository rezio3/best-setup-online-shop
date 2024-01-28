import React from "react";

const SingleSoundProductDetails = (props) => {
	const { singleProduct } = props;
	return (
		<>
			<div className="product-header-container__product-details-header">
				<h3>{singleProduct.name}</h3>

				<div>
					<span>Set: </span>
					<span>{singleProduct.set}</span>
				</div>
				<div>
					<span>Frequency: </span>
					<span>20hz - 20khz</span>
				</div>
				<div>
					<span>Total Watt (RMS): </span>
					<span>45 W</span>
				</div>
			</div>
		</>
	);
};

export default SingleSoundProductDetails;
