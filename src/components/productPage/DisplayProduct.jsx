import React, { useContext, useState } from "react";
import QuantityBox from "../cart/QuantityBox";
import InstallmentOffer from "../InstallmentOffer";
import QuestionsGeneral from "../QuestionsGeneral";
import SingleDisplayProductDetails from "./singleProductDetails/SingleDisplayProductDetails";
import SingleSoundProductDetails from "./singleProductDetails/SingleSoundProductDetails";
import SinglePcProductDetails from "./singleProductDetails/SinglePcProductDetails";
import SingleAccessoriesProductDetails from "./singleProductDetails/SingleAccessoriesProductDetails";
import SingleComfortProductDetails from "./singleProductDetails/SingleComfortProductDetails";
import SingleHotDealsProductDetails from "./singleProductDetails/SingleHotDealProductDetails";
import { ProductsOrderContext } from "../../context/OrderContext";

const DisplayProduct = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const [directItem, setDirectItem] = useState({
		quantity: 1,
	});
	const { singleProduct } = props;

	const ProductDetailsToDisplay = () => {
		switch (props.type) {
			case "display":
				return <SingleDisplayProductDetails singleProduct={singleProduct} />;
			case "sound":
				return <SingleSoundProductDetails singleProduct={singleProduct} />;
			case "pc":
				return <SinglePcProductDetails singleProduct={singleProduct} />;
			case "accessories":
				return (
					<SingleAccessoriesProductDetails singleProduct={singleProduct} />
				);
			case "comfort":
				return <SingleComfortProductDetails singleProduct={singleProduct} />;
			case "hotDeals":
				return <SingleHotDealsProductDetails singleProduct={singleProduct} />;
		}
	};

	const addToCartHandler = (e) => {
		let newItemToCart = { ...singleProduct };

		if (!order.cart.some((e) => e.name === newItemToCart.name)) {
			newItemToCart.quantity = directItem.quantity;
			setOrder({
				...order,
				cartOpen: !order.cartOpen,
				cart: [...order.cart, newItemToCart],
			});
		} else {
			const updatedCart = order.cart.map((e) => {
				return e.name === newItemToCart.name
					? { ...e, quantity: e.quantity + directItem.quantity }
					: e;
			});
			setOrder({
				...order,
				cartOpen: !order.cartOpen,

				cart: updatedCart,
			});
		}
	};

	return (
		<>
			<div className="product-header-container">
				<img
					src={singleProduct.img}
					className="product-header-container__product-image"
				/>
				<div className="product-header-container__details-container">
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
							<button
								className="product-header-container__add-to-cart-btn button-anim"
								onClick={addToCartHandler}
							>
								Add to cart
							</button>
						</div>
						<span className="product-header-container__under-price-box-span">
							Complete the order - adding products to the cart <br />
							does not reserve them.
						</span>
					</div>
				</div>
			</div>
			<InstallmentOffer />
			<QuestionsGeneral />
		</>
	);
};

export default DisplayProduct;
