import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsOrderContext } from "../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../style/css/totalPriceWindow.css";

const TotalPriceWindow = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const [snapWindow, setSnapWindow] = useState(false);
	const totalPriceWindowRef = useRef(null);
	const deliveryPrice = Number(order.customer.deliveryMethod.price);
	console.log(typeof deliveryPrice);

	const totalInsurancePrice = order.getTotalInsurancePrice();

	const totalProductPrice = order.getTotalProductPrice();

	const totalOrderPrice =
		totalInsurancePrice + totalProductPrice + deliveryPrice;

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				entry.intersectionRatio === 0
					? setSnapWindow(true)
					: setSnapWindow(false);
			},
			{ threshold: 1, rootMargin: "-110px 0px 0px 0px" }
		);
		observer.observe(totalPriceWindowRef.current);
	}, []);

	return (
		<>
			<div
				className="snap-window-price-threshold"
				ref={totalPriceWindowRef}
			></div>
			<div
				className={
					totalPriceWindowRef
						? "total-price-window-wrapper snap-window-price"
						: "total-price-window-wrapper"
				}
			>
				<div className="total-price-window-container">
					<div className="total-price-window-container__prices-container">
						<span>Your cart</span>
						<span>{totalProductPrice.toFixed(2)} $</span>
					</div>
					<div className="total-price-window-container__prices-container">
						<span>Delivery</span>
						<span>{deliveryPrice.toFixed(2)} $</span>
					</div>
					<div className="total-price-window-container__prices-container">
						<span>Insurance</span>
						<span>{totalInsurancePrice.toFixed(2)} $</span>
					</div>
					<div className="total-price-window-container__total-price-container">
						<span>Total price</span>
						<span>{totalOrderPrice.toFixed(2)} $</span>
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
