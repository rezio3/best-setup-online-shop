import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ItemInCart = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	let objIndex = order.cart.findIndex((obj) => obj.name === props.name);
	let directItem = order.cart[objIndex];
	const quantityButtonHandler = (e) => {
		let newQuantity;
		if (e.target.name === "minus-btn") {
			newQuantity = -1;
		} else if (e.target.name === "plus-btn") {
			newQuantity = 1;
		}
		const updatedCart = order.cart.map((item, index) => {
			return index === objIndex
				? { ...item, quantity: item.quantity + newQuantity }
				: item;
		});
		setOrder({
			...order,
			cart: updatedCart,
		});
	};

	return (
		<>
			<div className="cart-window-container__item-box">
				<img src={props.image} className="cart-window-container__item-img" />
				<span className="cart-window-container__item-name">{props.name}</span>
				<div className="quantity-box">
					<button
						className="quantity-box__btn quantity-box__btn--left"
						onClick={quantityButtonHandler}
						disabled={directItem.quantity === 1 ? true : false}
						name={"minus-btn"}
					>
						−
					</button>
					<span className="quantity-box__quantity-span">
						{directItem.quantity}
					</span>
					<button
						className="quantity-box__btn quantity-box__btn--right"
						onClick={quantityButtonHandler}
						name={"plus-btn"}
					>
						+
					</button>
				</div>

				<span className="cart-window-container__item-price">
					{props.price} $
				</span>
				<FontAwesomeIcon
					icon={faTrash}
					className="cart-window-container__trash"
				/>
			</div>
		</>
	);
};

export default ItemInCart;
