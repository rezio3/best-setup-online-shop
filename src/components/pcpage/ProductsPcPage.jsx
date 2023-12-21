import React, { useContext } from "react";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";

const ProductsPcPage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const {
		appliedFiltersPcCpu,
		appliedFiltersPcRam,
		appliedFiltersPcMemory,
		appliedFiltersPcGpu,
	} = filter;

	let itemsToDisplay = [...products.pc];

	// if (appliedFiltersSoundsType.length !== 0) {
	// 	itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
	// 		return appliedFiltersSoundsType.some(
	// 			(element) => element === singleProduct.type
	// 		);
	// 	});
	// }

	// sort products depending on the price direction

	if (filter.priceUp) {
		itemsToDisplay.sort(pricesUpwards);
	} else if (filter.priceDown) {
		itemsToDisplay.sort(pricesDownwards);
	}

	// sort products depending on the price range

	itemsToDisplay = sortPriceRange(filter.priceRange, itemsToDisplay);

	return (
		<>
			<div className="products-container">
				{itemsToDisplay.map((e) => {
					return <ProductBox product={e} key={e.productId} />;
				})}
			</div>
		</>
	);
};

export default ProductsPcPage;
