export const productsQuantityButtons = (e, order, objIndex) => {
	let newQuantity;
	if (e.target.name === "minus-btn") {
		newQuantity = -1;
	} else if (e.target.name === "plus-btn") {
		newQuantity = 1;
	}
	const updatedCart = order.cart.map((item, index) => {
		return index === objIndex
			? { ...item, quantity: item.quantity + newQuantity }
			: item;
	});
	return updatedCart;
};

export default productsQuantityButtons;
