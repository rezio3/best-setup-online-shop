import React, { createContext, useState } from "react";

export const orderObj = {
	cartOpen: false,
	cart: [],
	getProductsQuantity: function () {
		return this.cart.reduce((sum, obj) => sum + obj.quantity, 0);
	},
	getTotalPrice: function () {
		if (this.cart.length > 0) {
			return this.cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);
		}
	},
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
		delivery: "",
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
