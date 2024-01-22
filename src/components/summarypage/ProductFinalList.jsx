import React from "react";

const ProductFinalList = (props) => {
	return (
		<>
			<li className="summary-list-container__element">
				<img src={props.img} className="summary-list-container__img" />
				<span className="summary-list-container__product-name">
					{props.name}
				</span>
				<span className="summary-list-container__quantity">
					x{props.quantity}
				</span>
			</li>
		</>
	);
};

export default ProductFinalList;
