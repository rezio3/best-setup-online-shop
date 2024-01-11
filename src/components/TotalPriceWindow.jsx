import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsOrderContext } from "../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../style/css/totalPriceWindow.css";

const TotalPriceWindow = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	const totalPrice = order.getTotalPrice();

	return (
		<>
			<div className="total-price-window-wrapper">
				<div className="total-price-window-container">
					<div className="total-price-window-container__prices-container">
						<span>Your cart</span>
						<span>{order.getTotalProductPrice()} $</span>
					</div>
					<div className="total-price-window-container__prices-container">
						<span>Delivery</span>
						<span>{order.getTotalProductPrice()} $</span>
					</div>
					<div className="total-price-window-container__prices-container">
						<span>Insurance</span>
						<span>{order.getTotalInsurancePrice().toFixed(2)} $</span>
					</div>
					<div className="total-price-window-container__total-price-container">
						<span>Total price</span>
						<span>{order.getTotalPrice()} $</span>
					</div>
					<div className="total-price-window-container__space-line"></div>
					<NavLink to={props.linkTo}>
						<button className="total-price-window-container__delivery-button button-anim">
							{props.btnText}
							<FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
						</button>
					</NavLink>
				</div>
				<span className="total-price-window-wrapper__info-note">
					Complete the order - adding products to the cart <br />
					does not reserve them.
				</span>
			</div>
		</>
	);
};

export default TotalPriceWindow;
