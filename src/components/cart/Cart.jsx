import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	console.log(order);
	return (
		<>
			<div className="cart-wrapper">
				<div className="cart-container">
					<div className="cart-container__header-box">
						<h3>
							Cart<span>{}</span>
						</h3>
						<button>
							Clear cart
							<FontAwesomeIcon
								icon={faTrash}
								className="cart-window-container__trash-icon"
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
