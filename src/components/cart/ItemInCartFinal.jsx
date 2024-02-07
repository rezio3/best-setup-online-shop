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
	const insurancePrice = (directItem.price * 0.1).toFixed(2);
	const isInsurance = !order.insurances.some(
		(obj) => obj.product === directItem.name
	);
	const switchInsuranceHandler = () => {
		let newInsurancesArr;
		if (isInsurance) {
			newInsurancesArr = [
				...order.insurances,
				{
					product: directItem.name,
					insurancePrice: Number(insurancePrice),
				},
			];
		} else {
			newInsurancesArr = order.insurances.filter(
				(e) => e.product !== directItem.name
			);
		}
		setOrder({
			...order,
			insurances: newInsurancesArr,
		});
	};
	return (
		<>
			<div className="cart-window-container__item-box item-box-final">
				<img
					src={props.image}
					className="cart-window-container__item-img item-box-final__item-img"
				/>
				<span className="cart-window-container__item-name item-box-final__item-name">
					{props.name}
				</span>
				<QuantityBox directItem={directItem} objIndex={objIndex} />

				<span className="cart-window-container__item-price item-box-final__item-price">
					{props.price} $
				</span>
				<InsuranceInfo price={insurancePrice} />
				<button
					className="item-box-final__insurance-btn button-anim"
					onClick={switchInsuranceHandler}
				>
					{isInsurance ? "Buy insurance" : "Delete insurance"}
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
