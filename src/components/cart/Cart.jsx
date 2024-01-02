import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";
import "../../style/css/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	return (
		<>
			<div className="cart-wrapper">
				<div className="cart-container">
					<div className="cart-container__header-box">
						<h3 className="cart-container__header">
							Cart{" "}
							<span className="cart-container__header--gray">
								({order.getProductsQuantity()})
							</span>
						</h3>
						<button className="cart-container__clear-cart-btn">
							Clear cart
							<FontAwesomeIcon
								icon={faTrash}
								className="cart-container__trash-icon"
							/>
						</button>
					</div>
				</div>
				<div className="go-to-order-form-container"></div>
			</div>
		</>
	);
};

export default Cart;
