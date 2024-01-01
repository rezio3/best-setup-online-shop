import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";

const OrderFormPage = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	console.log(order);
	return <></>;
};

export default OrderFormPage;
