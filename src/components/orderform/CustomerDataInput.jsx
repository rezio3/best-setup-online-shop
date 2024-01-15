import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";

const CustomerDataInput = (props) => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const inputHandler = (e) => {
		setOrder({
			...order,
			customer: {
				...order.customer,
				[props.inputName]: e.target.value,
			},
		});
	};
	return (
		<>
			<label className="data-container__label">
				{props.label}
				<input
					type="text"
					className="data-container__input"
					onChange={inputHandler}
					value={order.customer[props.inputName]}
				/>
			</label>
		</>
	);
};

export default CustomerDataInput;
