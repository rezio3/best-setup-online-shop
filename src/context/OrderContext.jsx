import React, { createContext, useState } from "react";

export const orderObj = {
	cartOpen: false,
	cart: [],
	insurances: [],
	customer: {
		name: "",
		surname: "",
		email: "",
		phone: "",
		address: {
			city: "",
			postalCode: "",
			street: "",
			buildingNumber: "",
			flatNumber: "",
		},
		deliveryMethod: {
			method: "Courier shipping",
			price: "7.99",
		},
		paymentMethod: "Credit/Debit card",
		totalOrderPrice: null,
	},
	getProductsQuantity: function () {
		return this.cart.reduce((sum, obj) => sum + obj.quantity, 0);
	},
	getTotalProductPrice: function () {
		if (this.cart.length === 0) {
			return 0;
		}
		return Number(
			this.cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
		);
	},
	getTotalInsurancePrice: function () {
		if (this.insurances.length === 0) {
			return 0;
		}
		return Number(
			this.insurances.reduce((acc, obj) => acc + obj.insurancePrice, 0)
		);
	},
	getDeliveryPrice: function () {
		return Number(this.customer.deliveryMethod.price);
	},
};

export const ProductsOrderContext = createContext();

const OrderContext = ({ children }) => {
	const [order, setOrder] = useState(orderObj);

	return (
		<ProductsOrderContext.Provider value={[order, setOrder]}>
			{children}
		</ProductsOrderContext.Provider>
	);
};

export default OrderContext;
