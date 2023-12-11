const sortPriceRange = (priceRange, itemsArray) => {
	console.log(itemsArray);
	let newArrPriceFrom = itemsArray.filter(
		(e) => e.price >= Number(priceRange.priceFrom)
	);

	let newArrPriceTo = newArrPriceFrom.filter(
		(e) =>
			e.price <=
			(Number(priceRange.priceTo) === 0 ? Infinity : Number(priceRange.priceTo))
	);

	return newArrPriceTo;
};

export default sortPriceRange;
