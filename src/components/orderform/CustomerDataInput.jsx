import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";

const CustomerDataInput = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	let isInputValid =
		props.dataType === "personal"
			? props.valid.test(order.customer[props.inputName])
			: props.valid.test(order.customer.address[props.inputName]);

	let validationColorClassName;

	if (isInputValid === null) {
		validationColorClassName = "data-container__input";
	} else if (isInputValid) {
		validationColorClassName =
			"data-container__input data-container__input--valid";
	} else if (!isInputValid) {
		validationColorClassName =
			"data-container__input data-container__input--invalid";
	}

	const inputHandler = (e) => {
		if (props.dataType === "personal") {
			setOrder({
				...order,
				customer: {
					...order.customer,
					[props.inputName]: e.target.value,
				},
			});
		} else if (props.dataType === "address") {
			setOrder({
				...order,
				customer: {
					...order.customer,
					address: {
						...order.customer.address,
						[props.inputName]: e.target.value,
					},
				},
			});
		}
	};
	return (
		<>
			<label className="data-container__label">
				{props.label}
				<input
					type="text"
					className={validationColorClassName}
					onChange={inputHandler}
					value={order.customer[props.inputName]}
				/>
			</label>
		</>
	);
};

export default CustomerDataInput;
