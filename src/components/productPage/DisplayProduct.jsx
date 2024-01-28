import React, { useState } from "react";
import QuantityBox from "../cart/QuantityBox";
import InstallmentOffer from "../InstallmentOffer";
import QuestionsGeneral from "../QuestionsGeneral";

const DisplayProduct = (props) => {
	const [directItem, setDirectItem] = useState({
		quantity: 1,
	});
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
				<div className="product-header-container__price-and-buy-box">
					<div className="product-header-container__price-box">
						<span>Price:</span>
						<span>50.00 $</span>
					</div>
					<QuantityBox
						directItem={directItem}
						page="product-page"
						setDirectItem={setDirectItem}
					/>
					<button className="product-header-container__add-to-cart-btn button-anim">
						Add to cart
					</button>
				</div>
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default DisplayProduct;
