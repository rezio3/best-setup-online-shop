import React, { useContext } from "react";
import "../../style/css/cartWindow.css";
import { ProductsOrderContext } from "../../context/OrderContext";
import ItemInCart from "./ItemInCart";

const CartWindow = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	console.log(order);
	return (
		<>
			{order.cartOpen ? (
				<div className="cart-window-wrapper">
					<div className="cart-window-container">
						<h3 className="cart-window-container__header">Your Cart</h3>
						<ItemInCart />
					</div>
				</div>
			) : null}
		</>
	);
};

export default CartWindow;
