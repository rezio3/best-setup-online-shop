import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";
import "../../style/css/cartFinal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrash } from "@fortawesome/free-solid-svg-icons";

import ItemInCartFinal from "./ItemInCartFinal";

const CartFinal = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	const deleteCartHandler = () => {
		setOrder({
			...order,
			cart: [],
		});
	};

	return (
		<>
			<div className="cart-wrapper">
				{order.cart.length !== 0 ? (
					<>
						<div className="cart-container">
							<div className="cart-container__header-box">
								<h3 className="cart-container__header">
									Cart{" "}
									<span className="cart-container__header--gray">
										({order.getProductsQuantity()})
									</span>
								</h3>
								<button
									className="cart-container__clear-cart-btn"
									onClick={deleteCartHandler}
								>
									Clear cart
									<FontAwesomeIcon
										icon={faTrash}
										className="cart-container__trash-icon"
									/>
								</button>
							</div>
							<div className="cart-box">
								{order.cart.map((e) => {
									return (
										<ItemInCartFinal
											image={e.img}
											name={e.name}
											price={e.price}
											key={e.name}
										/>
									);
								})}
							</div>
						</div>
						<div className="go-to-order-form-wrapper">
							<div className="go-to-order-form-container">
								<div className="go-to-order-form-container__total-price-container">
									<span>Total price</span>
									<span>{order.getTotalPrice()} $</span>
								</div>
								<button className="go-to-order-form-container__delivery-button button-anim">
									Proceed to delivery
									<FontAwesomeIcon
										icon={faAngleRight}
										className="arrow-right"
									/>
								</button>
							</div>
							<span className="go-to-order-form-wrapper__info-note">
								Complete the order - adding products to the cart <br />
								does not reserve them.
							</span>
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export default CartFinal;
