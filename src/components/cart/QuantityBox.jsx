import React, { useContext } from "react";
import productsQuantityButtons from "../../functions/productsQuantityButtons";
import { ProductsOrderContext } from "../../context/OrderContext";

const QuantityBox = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const quantityButtonHandler = (e) => {
		if (props.page === "product-page") {
		} else {
			const updatedCart = productsQuantityButtons(e, order, props.objIndex);
			setOrder({
				...order,
				cart: updatedCart,
			});
		}
	};
	return (
		<>
			<div className="quantity-box">
				<button
					className="quantity-box__btn quantity-box__btn--left"
					onClick={quantityButtonHandler}
					disabled={props.directItem.quantity === 1 ? true : false}
					name={"minus-btn"}
				>
					−
				</button>
				<span className="quantity-box__quantity-span">
					{props.directItem.quantity}
				</span>
				<button
					className="quantity-box__btn quantity-box__btn--right"
					onClick={quantityButtonHandler}
					name={"plus-btn"}
				>
					+
				</button>
			</div>
		</>
	);
};

export default QuantityBox;
