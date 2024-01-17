import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";

const AdditionalInformation = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	const textareaHandler = (e) => {
		setOrder({
			...order,
			additionalNote: e.target.value,
		});
	};
	return (
		<>
			<div className="additional-information-container">
				<h3 className="additional-information-container__header">
					Additional information
				</h3>
				<textarea
					className="additional-information-container__text-area"
					type="textarea"
					onChange={textareaHandler}
					value={order.additionalNote}
				></textarea>
			</div>
		</>
	);
};

export default AdditionalInformation;
