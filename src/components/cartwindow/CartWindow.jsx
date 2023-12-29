import React, { useContext } from "react";
import "../../style/css/cartWindow.css";
import { ProductsOrderContext } from "../../context/OrderContext";
import ItemInCart from "./ItemInCart";
import "../../style/css/scrollCustom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartWindow = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const cartXButtonHandler = (event) => {
		if (event.target === event.currentTarget || event.target.id === "xButton") {
			setOrder({
				...order,
				cartOpen: !order.cartOpen,
			});
		}
	};
	return (
		<>
			{order.cartOpen ? (
				<div className="cart-window-background" onClick={cartXButtonHandler}>
					<div className="cart-window-wrapper cart-window-scroll">
						<div className="cart-window-container">
							<div className="cart-window-container__header-box">
								<h3 className="cart-window-container__header">Your Cart</h3>
								<button
									className="cart-window-container__back-btn"
									onClick={cartXButtonHandler}
								>
									<FontAwesomeIcon icon={faXmark} className="XIcon" />
								</button>
							</div>
							{order.cart.map((e) => {
								return (
									<ItemInCart
										image={e.img}
										name={e.name}
										price={e.price}
										key={e.name}
									/>
								);
							})}
							{order.cart.length === 0 ? (
								<div className="cart-window-container__empty-cart-notification-box">
									<span className="cart-window-container__empty-cart-notification">
										Your cart is empty!
									</span>
								</div>
							) : null}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default CartWindow;
