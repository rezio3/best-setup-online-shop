import React, { useContext } from "react";
import "../style/css/cartWindow.css";
import { ProductsOrderContext } from "../context/OrderContext";

const CartWindow = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	console.log(order);
	return (
		<div className="cart-window-wrapper">
			<div className="cart-window-container"></div>
		</div>
	);
};

export default CartWindow;
