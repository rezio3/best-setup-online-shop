const deleteItem = (order, setOrder, props) => {
	const updatedCart = order.cart.filter((e) => {
		return e.name !== props.name && e;
	});
	setOrder({
		...order,
		cart: updatedCart,
	});
};

export default deleteItem;
