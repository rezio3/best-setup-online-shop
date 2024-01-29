import React from "react";
import { getSpecInfoToHotDealsProducts } from "./getSpecInfoToHotDealsProducts";

const SingleHotDealsProductDetails = (props) => {
	const { singleProduct } = props;

	const specification = getSpecInfoToHotDealsProducts(singleProduct);
	return (
		<>
			<div className="product-header-container__product-details-header">
				<h3>{singleProduct.name}</h3>
				<span className="product-header-container__specification-span">
					Specification
				</span>
				<div>
					<span>{specification.specification1span}</span>
					<span>{specification.spec1info}</span>
				</div>
				<div>
					<span>{specification.specification2span}</span>
					<span>{specification.spec2info}</span>
				</div>
				<div>
					<span>{specification.specification3span}</span>
					<span>{specification.spec3info}</span>
				</div>
				<div>
					<span>{specification.specification4span}</span>
					<span>{specification.spec4info}</span>
				</div>
			</div>
		</>
	);
};

export default SingleHotDealsProductDetails;
