import React, { useContext } from "react";
import "../../style/css/summaryPage.css";
import tick from "../../img/tick.png";
import { ProductsOrderContext } from "../../context/OrderContext";
import ProductFinalList from "./ProductFinalList";

const SummaryPage = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const finalOrder = order;

	// setOrder({
	// 	cartOpen: false,
	// 	cart: [],
	// 	insurances: [],
	// 	customer: {
	// 		name: "",
	// 		surname: "",
	// 		email: "",
	// 		phone: "",
	// 		address: {
	// 			city: "",
	// 			postalCode: "",
	// 			street: "",
	// 			buildingNumber: "",
	// 			flatNumber: "",
	// 		},
	// 		deliveryMethod: {
	// 			method: "Courier shipping",
	// 			price: 7.99,
	// 		},
	// 		paymentMethod: "Credit/Debit card",
	// 		totalOrderPrice: null,
	// 	},
	// 	additionalNote: "",
	// 	getProductsQuantity: function () {
	// 		return this.cart.reduce((sum, obj) => sum + obj.quantity, 0);
	// 	},
	// 	getTotalProductPrice: function () {
	// 		if (this.cart.length === 0) {
	// 			return 0;
	// 		}
	// 		return Number(
	// 			this.cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
	// 		);
	// 	},
	// 	getTotalInsurancePrice: function () {
	// 		if (this.insurances.length === 0) {
	// 			return 0;
	// 		}
	// 		return Number(
	// 			this.insurances.reduce((acc, obj) => acc + obj.insurancePrice, 0)
	// 		);
	// 	},
	// });
	console.log(finalOrder.customer.deliveryMethod.price);

	const totalProductPrice = finalOrder.getTotalProductPrice();
	const totalInsurancePrice = finalOrder.getTotalInsurancePrice();
	const totalPrice =
		Number(totalProductPrice) +
		Number(totalInsurancePrice) +
		Number(finalOrder.customer.deliveryMethod.price);
	return (
		<>
			<div className="summary-page-wrapper">
				<div className="summary-page-container">
					<h3 className="summary-page-container__header">
						Thank you {finalOrder.customer.name} for making a purchase!
					</h3>
					<span className="summary-page-container__delivery-shipped-span">
						The order will be shipped as soon as we process the payment.
					</span>
					<img src={tick} className="summary-page-container__tick-img" />

					<h3 className="receipt-details-header">Customer's receipt details</h3>
					<div className="final-order-details-container">
						<div className="final-order-details-box">
							<div className="final-order-details-box__customer-details-container">
								<h4 className="final-order-details-box__customer-header">
									Customer
								</h4>
								<span>
									{finalOrder.customer.name} {finalOrder.customer.surname}
								</span>
								<span>{finalOrder.customer.phone}</span>
								<span>{finalOrder.customer.email}</span>
								<h4 className="final-order-details-box__customer-header">
									Delivery address
								</h4>
								<span>
									{finalOrder.customer.address.city}{" "}
									{finalOrder.customer.address.postalCode}
								</span>
								<span>
									{finalOrder.customer.address.street}{" "}
									{finalOrder.customer.address.buildingNumber}/
									{finalOrder.customer.address.flatNumber}
								</span>
								<h4 className="final-order-details-box__customer-header">
									Delivery method
								</h4>
								<span>{finalOrder.customer.deliveryMethod.method}</span>
								<h4 className="final-order-details-box__customer-header">
									Payment method
								</h4>
								<span>{finalOrder.customer.paymentMethod}</span>
							</div>
						</div>
						<div className="final-order-details-box">
							<h4 className="final-order-details-box__customer-header">
								Order
							</h4>
							<ul className="summary-list-container">
								{finalOrder.cart.map((e) => {
									return (
										<ProductFinalList
											img={e.img}
											name={e.name}
											quantity={e.quantity}
										/>
									);
								})}
							</ul>
							<div className="final-order-details-box__total-price-box">
								<span className="final-order-details-box__price-span">
									Total:
								</span>
								<span className="final-order-details-box__price-span">
									{totalPrice.toFixed(2)} $
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SummaryPage;
