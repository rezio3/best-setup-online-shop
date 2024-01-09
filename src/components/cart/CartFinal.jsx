import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";
import "../../style/css/cartFinal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleRight,
	faTrash,
	faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ItemInCartFinal from "./ItemInCartFinal";
import { NavLink } from "react-router-dom";

const CartFinal = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	const deleteCartHandler = () => {
		setOrder({
			...order,
			cart: [],
		});
	};

	const navigate = useNavigate();
	const backBtnHandler = () => {
		navigate(-1);
	};

	return (
		<>
			<div className="final-cart-wrapper">
				<div className="cart-inner-wrapper">
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
							<div className="go-to-order-form-container__space-line"></div>
							<NavLink to="/cart/delivery">
								<button className="go-to-order-form-container__delivery-button button-anim">
									Proceed to delivery
									<FontAwesomeIcon
										icon={faAngleRight}
										className="arrow-right"
									/>
								</button>
							</NavLink>
						</div>
						<span className="go-to-order-form-wrapper__info-note">
							Complete the order - adding products to the cart <br />
							does not reserve them.
						</span>
					</div>
				</div>
				<button
					className="cart-page-wrapper__back-to-shopping-btn button-anim"
					onClick={backBtnHandler}
				>
					<FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
					Back to shopping
				</button>
			</div>
		</>
	);
};

export default CartFinal;
