const deleteItem = (order, setOrder, props) => {
	const updatedCart = order.cart.filter((e) => {
		return e.name !== props.name && e;
	});
	const updatedInsurance = order.insurances.filter((e) => {
		return e.product !== props.name && e;
	});
	setOrder({
		...order,
		cart: updatedCart,
		insurances: updatedInsurance,
	});
};

export default deleteItem;
