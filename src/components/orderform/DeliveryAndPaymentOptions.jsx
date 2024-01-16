import React, { useContext, useState } from "react";
import DeliveryCheckbox from "./DeliveryCheckbox";
import { ProductsOrderContext } from "../../context/OrderContext";

const DeliveryAndPaymentOptions = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const [check, setCheck] = useState(props.default);

	const checkboxHandler = (e) => {
		setCheck(e.name);
		if (props.header === "Delivery method") {
			setOrder({
				...order,
				customer: {
					...order.customer,
					deliveryMethod: { method: e.name, price: e.price },
				},
			});
		} else if (props.header === "Payment method") {
			setOrder({
				...order,
				customer: {
					...order.customer,
					paymentMethod: e.name,
				},
			});
		}
	};

	return (
		<>
			<ul className="delivery-payment-options-container">
				<h3 className="delivery-payment-options-container__header">
					{props.header}
				</h3>
				{props.checkboxes.map((e) => (
					<DeliveryCheckbox
						name={e.name}
						price={e.price}
						key={e.name}
						check={check}
						checkboxHandler={checkboxHandler}
					/>
				))}
			</ul>
		</>
	);
};

export default DeliveryAndPaymentOptions;
