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

	return (
		<>
			<div className="summary-page-wrapper">
				<div className="summary-page-container">
					<h3 className="summary-page-container__header">
						Thank you {finalOrder.customer.name} for making a purchase!
					</h3>
					<img src={tick} className="summary-page-container__tick-img" />
					<span className="summary-page-container__delivery-shipped-span">
						The order will be shipped as soon as we process the payment.
					</span>
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
					<div className="final-order-details-container"></div>
				</div>
			</div>
		</>
	);
};

export default SummaryPage;
