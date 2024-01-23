import React from "react";
import ProductFinalList from "./ProductFinalList";

const OrderDetails = (props) => {
	const { name, surname, phone, email } = props.finalOrder.customer;
	const { city, postalCode, street, buildingNumber, flatNumber } =
		props.finalOrder.customer.address;

	const totalProductPrice = props.finalOrder.getTotalProductPrice();
	const totalInsurancePrice = props.finalOrder.getTotalInsurancePrice();
	const totalPrice =
		Number(totalProductPrice) +
		Number(totalInsurancePrice) +
		Number(props.finalOrder.customer.deliveryMethod.price);
	return (
		<>
			<div className="final-order-details-container">
				<div className="final-order-details-box">
					<div className="final-order-details-box__customer-details-container">
						<h4 className="final-order-details-box__customer-header">
							Customer
						</h4>
						<span>
							{name} {surname}
						</span>
						<span>{phone}</span>
						<span>{email}</span>
						<h4 className="final-order-details-box__customer-header">
							Delivery address
						</h4>
						<span>
							{city} {postalCode}
						</span>
						<span>
							{street} {buildingNumber}/{flatNumber}
						</span>
						<h4 className="final-order-details-box__customer-header">
							Delivery method
						</h4>
						<span>{props.finalOrder.customer.deliveryMethod.method}</span>
						<h4 className="final-order-details-box__customer-header">
							Payment method
						</h4>
						<span>{props.finalOrder.customer.paymentMethod}</span>
					</div>
				</div>
				<div className="final-order-details-box">
					<h4 className="final-order-details-box__customer-header">Order</h4>
					<ul className="summary-list-container">
						{props.finalOrder.cart.map((e) => {
							return (
								<ProductFinalList
									img={e.img}
									name={e.name}
									quantity={e.quantity}
									price={e.price}
								/>
							);
						})}
					</ul>
					<div className="final-order-details-box__price-box">
						<span className="final-order-details-box__price-span">
							Delivery:
						</span>
						<span className="final-order-details-box__price-span">
							{Number(props.finalOrder.customer.deliveryMethod.price).toFixed(
								2
							)}{" "}
							$
						</span>
					</div>
					<div className="final-order-details-box__price-box">
						<span className="final-order-details-box__price-span">
							Insurances:
						</span>
						<span className="final-order-details-box__price-span">
							{totalInsurancePrice.toFixed(2)} $
						</span>
					</div>
					<div className="final-order-details-box__price-box">
						<span className="final-order-details-box__price-span">
							<b>Total:</b>
						</span>
						<span className="final-order-details-box__price-span">
							{totalPrice.toFixed(2)} $
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrderDetails;
