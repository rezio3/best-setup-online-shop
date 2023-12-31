import React, { useContext } from "react";
import "../../style/css/cartWindow.css";
import { ProductsOrderContext } from "../../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import QuantityBox from "./QuantityBox";
import "../../style/css/buttonsAnim.css";
import InsuranceInfo from "./InsuranceInfo";
import deleteItem from "../../functions/deleteItemFromCart";

const ItemInCartFinal = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	let objIndex = order.cart.findIndex((obj) => obj.name === props.name);
	let directItem = order.cart[objIndex];

	const trashHandler = () => {
		deleteItem(order, setOrder, props);
	};
	return (
		<>
			<div className="cart-window-container__item-box item-box-final">
				<img
					src={props.image}
					className="cart-window-container__item-img item-box-final__item-img"
				/>
				<span className="cart-window-container__item-name">{props.name}</span>
				<QuantityBox directItem={directItem} objIndex={objIndex} />

				<span className="cart-window-container__item-price item-box-final__item-price">
					{props.price} $
				</span>
				<InsuranceInfo price={directItem.price} />
				<button className="item-box-final__insurance-btn button-anim">
					Buy insurance
				</button>
				<button
					className="cart-window-container__trash-button item-box-final__trash-button"
					onClick={trashHandler}
				>
					<FontAwesomeIcon
						icon={faTrash}
						className="cart-window-container__trash-icon item-box-final__trash-icon"
					/>
				</button>
			</div>
		</>
	);
};

export default ItemInCartFinal;
