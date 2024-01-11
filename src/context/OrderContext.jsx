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
		delivery: "Courier",
	},
	getProductsQuantity: function () {
		return this.cart.reduce((sum, obj) => sum + obj.quantity, 0);
	},
	getTotalProductPrice: function () {
		if (this.cart.length > 0) {
			return this.cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);
		}
	},
	getTotalInsurancePrice: function () {
		if (this.insurances.length > 0) {
			return this.insurances.reduce((acc, obj) => acc + obj.insurancePrice, 0);
		} else {
			return 0;
		}
	},
	getTotalPrice: function () {
		return this.getTotalProductPrice + this.getTotalInsurancePrice;
	},
	// getTotalProductPrice: function () {
	// 	if (this.cart.length > 0) {
	// 		return this.cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);
	// 	}
	// },
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
