import React, { useContext } from "react";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";

const ProductsDisplayPage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const {
		appliedFiltersDisplaysResolution,
		appliedFiltersDisplaysFps,
		appliedFiltersDisplaysSize,
	} = filter;

	let itemsToDisplay = [...products.displays];

	if (appliedFiltersDisplaysResolution.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersDisplaysResolution.some(
				(element) => element === singleProduct.resolution
			);
		});
	}

	if (appliedFiltersDisplaysFps.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersDisplaysFps.some(
				(element) => element === singleProduct.fps
			);
		});
	}
	if (appliedFiltersDisplaysSize.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersDisplaysSize.some(
				(element) => element === singleProduct.size
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

export default ProductsDisplayPage;
