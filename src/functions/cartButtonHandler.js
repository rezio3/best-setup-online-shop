export const cartButtonHandler = (order, setOrder) => {
	setOrder({
		...order,
		cartOpen: !order.cartOpen,
	});
};
