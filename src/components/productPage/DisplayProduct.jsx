import React, { useState } from "react";
import QuantityBox from "../cart/QuantityBox";
import InstallmentOffer from "../InstallmentOffer";
import QuestionsGeneral from "../QuestionsGeneral";
import SingleDisplayProductDetails from "./singleProductDetails/SingleDisplayProductDetails";
import SingleSoundProductDetails from "./singleProductDetails/SingleSoundProductDetails";
import SinglePcProductDetails from "./singleProductDetails/SinglePcProductDetails";
import SingleAccessoriesProductDetails from "./singleProductDetails/SingleAccessoriesProductDetails";
import SingleComfortProductDetails from "./singleProductDetails/SingleComfortProductDetails";

const DisplayProduct = (props) => {
	const [directItem, setDirectItem] = useState({
		quantity: 1,
	});
	const { singleProduct } = props;

	const ProductDetailsToDisplay = () => {
		if (props.type === "display") {
			return <SingleDisplayProductDetails singleProduct={singleProduct} />;
		} else if (props.type === "sound") {
			return <SingleSoundProductDetails singleProduct={singleProduct} />;
		} else if (props.type === "pc") {
			return <SinglePcProductDetails singleProduct={singleProduct} />;
		} else if (props.type === "accessories") {
			return <SingleAccessoriesProductDetails singleProduct={singleProduct} />;
		} else if (props.type === "comfort") {
			return <SingleComfortProductDetails singleProduct={singleProduct} />;
		}
	};

	return (
		<>
			<div className="product-header-container">
				<img
					src={singleProduct.img}
					className="product-header-container__product-image"
				/>
				<ProductDetailsToDisplay />
				<div className="price-and-buy-box-wrapper">
					<div className="product-header-container__price-and-buy-box">
						<div className="product-header-container__price-box">
							<span>
								<b>Price:</b>
							</span>
							<span>{singleProduct.price.toFixed(2)} $</span>
						</div>
						<div className="product-header-container__price-box">
							<span>
								<b>Quantity:</b>
							</span>
							<QuantityBox
								directItem={directItem}
								page="product-page"
								setDirectItem={setDirectItem}
							/>
						</div>
						<button className="product-header-container__add-to-cart-btn button-anim">
							Add to cart
						</button>
					</div>
					<span className="product-header-container__under-price-box-span">
						Complete the order - adding products to the cart <br />
						does not reserve them.
					</span>
				</div>
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default DisplayProduct;
