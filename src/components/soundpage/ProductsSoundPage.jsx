import React, { useContext } from "react";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";

const ProductsSoundPage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const { appliedFiltersSoundsType, appliedFiltersSoundsSet } = filter;

	let itemsToDisplay = [...products.sound];

	if (appliedFiltersSoundsType.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersSoundsType.some(
				(element) => element === singleProduct.type
			);
		});
	}
	if (
		appliedFiltersSoundsSet.length !== 0 &&
		appliedFiltersSoundsType.some((e) => e === "speakers")
	) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersSoundsSet.some(
				(element) => element === singleProduct.set
			);
		});
	}

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

export default ProductsSoundPage;
