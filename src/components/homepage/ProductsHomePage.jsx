import React, { useContext } from "react";
import "../../style/css/productBox.css";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";
import NoProductsSpan from "../NoProductsSpan";

const ProductsHomePage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const { appliedFiltersHomePage } = filter;

	let itemsToDisplay;
	if (appliedFiltersHomePage.length !== 0) {
		itemsToDisplay = products.hotDeals.filter((singleProduct) => {
			return appliedFiltersHomePage.some(
				(element) => element === singleProduct.type
			);
		});
	} else {
		itemsToDisplay = [...products.hotDeals];
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
					return <ProductBox product={e} key={e.productId} page="hotDeals" />;
				})}
				{itemsToDisplay.length === 0 ? <NoProductsSpan /> : null}
			</div>
		</>
	);
};

export default ProductsHomePage;
