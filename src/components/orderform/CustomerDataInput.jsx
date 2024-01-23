import React, { useContext, useEffect, useState } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";

const CustomerDataInput = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	// const [validationColorClassName, setValidationColorClassName] =
	// 	useState(null);

	const inputHandler = (e) => {
		if (props.dataType === "personal") {
			setOrder({
				...order,
				customer: {
					...order.customer,
					[props.inputName]: e.target.value,
				},
			});
			props.setValidation({
				...props.validation,
				[props.inputName]: isInputValid,
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
			props.setValidation({
				...props.validation,
				[props.inputName]: isInputValid,
			});
		}
	};

	let isInputValid =
		props.dataType === "personal"
			? props.regex.test(order.customer[props.inputName])
			: props.regex.test(order.customer.address[props.inputName]);
	console.log(isInputValid);
	let validationColorClassName;

	if (isInputValid) {
		// console.log("valid");
		validationColorClassName =
			"data-container__input data-container__input--valid";
	} else if (!isInputValid) {
		// console.log("invalid");
		validationColorClassName =
			"data-container__input data-container__input--invalid";
	}
	if (props.inputName === "flatNumber") {
		validationColorClassName = "data-container__input";
	}

	// useEffect(() => {
	// 	props.setValidation({
	// 		...props.validation,
	// 		[props.inputName]: isInputValid,
	// 	});
	// }, [order.customer]);

	// if (isInputValid) {
	// 	setValidationColorClassName(
	// 		"data-container__input data-container__input--valid"
	// 	);
	// } else if (!isInputValid) {
	// 	setValidationColorClassName(
	// 		"data-container__input data-container__input--invalid"
	// 	);
	// }
	// if (props.inputName === "flatNumber") {
	// 	setValidationColorClassName("data-container__input");
	// }

	return (
		<>
			<label className="data-container__label">
				{props.label}
				<input
					type="text"
					className={
						props.validation[props.inputName] === "empty"
							? "data-container__input"
							: validationColorClassName
					}
					onChange={inputHandler}
					value={
						props.dataType === "personal"
							? order.customer[props.inputName]
							: order.customer.address[props.inputName]
					}
				/>
			</label>
		</>
	);
};

export default CustomerDataInput;
