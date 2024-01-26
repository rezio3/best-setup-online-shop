import React, { useContext } from "react";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";
import NoProductsSpan from "../NoProductsSpan";

const ProductsAccessoriesPage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const { appliedFiltersAccessoriesType } = filter;

	let itemsToDisplay = [...products.accessories];

	if (appliedFiltersAccessoriesType.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersAccessoriesType.some(
				(element) => element === singleProduct.type
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
					return (
						<ProductBox product={e} key={e.productId} page="accessories" />
					);
				})}
				{itemsToDisplay.length === 0 ? <NoProductsSpan /> : null}
			</div>
		</>
	);
};

export default ProductsAccessoriesPage;
