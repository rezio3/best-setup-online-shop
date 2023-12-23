import React, { createContext, useState } from "react";

export const orderObj = {
	cart: [],
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
