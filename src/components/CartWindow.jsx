import React, { useContext } from "react";
import "../style/css/cartWindow.css";
import { ProductsOrderContext } from "../context/OrderContext";

const CartWindow = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	console.log(order);
	return (
		<>
			{order.cartOpen ? (
				<div className="cart-window-wrapper">
					<div className="cart-window-container"></div>
				</div>
			) : null}
		</>
	);
};

export default CartWindow;
