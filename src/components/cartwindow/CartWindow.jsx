import React, { useContext } from "react";
import "../../style/css/cartWindow.css";
import { ProductsOrderContext } from "../../context/OrderContext";
import ItemInCart from "./ItemInCart";
import "../../style/css/scrollCustom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

	let totalPrice;
	if (order.cart.length > 0) {
		console.log(order.cart);
		totalPrice = order.cart.reduce(
			(acc, obj) => acc + obj.price * obj.quantity,
			0
		);
	}

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
							) : (
								<div className="cart-window-container__lower-container">
									<div>
										<span className="cart-window-container__total-price-span">
											Total price:
										</span>
										<span className="cart-window-container__total-price">
											{totalPrice} $
										</span>
									</div>
									<button className="cart-window-container__checkoutBtn button-anim">
										Go to checkout
										<FontAwesomeIcon
											icon={faAngleRight}
											className="arrow-right"
										/>
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default CartWindow;
