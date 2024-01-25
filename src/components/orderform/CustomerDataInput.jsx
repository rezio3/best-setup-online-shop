import React, { useContext, useEffect, useState } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";

const CustomerDataInput = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const [validationColorClassName, setValidationColorClassName] = useState(
		"data-container__input"
	);

	const inputHandler = (e) => {
		let isInputValid = props.regex.test(e.target.value);

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

		if (props.inputName === "flatNumber") {
			return;
		}

		if (isInputValid) {
			setValidationColorClassName(
				"data-container__input data-container__input--valid"
			);
		} else if (!isInputValid) {
			setValidationColorClassName(
				"data-container__input data-container__input--invalid"
			);
		}
		props.setValidation({
			...props.validation,
			[props.inputName]: isInputValid,
		});
	};

	// check if buy button is clicked and validate inputs
	useEffect(() => {
		if (props.buyBtnClicked) {
			let isInputValid = props.validation[props.inputName];
			if (props.inputName === "flatNumber") {
				return;
			}

			if (isInputValid) {
				setValidationColorClassName(
					"data-container__input data-container__input--valid"
				);
			} else if (!isInputValid) {
				setValidationColorClassName(
					"data-container__input data-container__input--invalid"
				);
			}
		}
	}, [props.buyBtnClicked]);

	return (
		<>
			<label className="data-container__label">
				{props.label}
				<input
					type="text"
					className={validationColorClassName}
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
