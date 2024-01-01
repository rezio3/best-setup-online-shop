import React, { createContext, useState } from "react";

export const orderObj = {
	cartOpen: false,
	cart: [],
	getProductsQuantity: function () {
		return this.cart.reduce((sum, obj) => sum + obj.quantity, 0);
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
