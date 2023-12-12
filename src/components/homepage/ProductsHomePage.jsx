import React, { useContext } from "react";
import "../../style/css/productsHomePage.css";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";

const ProductsHomePage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const { appliedFilters } = filter;
	let filteredProduct = products.hotDeals.filter(singleProduct => appliedFilters.some(element => element === singleProduct.type));

	// sort products depending on the price direction
	if (filter.priceUp) {
		filteredProduct.sort(pricesUpwards);
	} else if (filter.priceDown) {
		filteredProduct.sort(pricesDownwards);
	}
	// sort products depending on the price range

	filteredProduct = sortPriceRange(filter.priceRange, filteredProduct);

	return (
		<>
			<div className="products-container">
				{filteredProduct.map((e) => {
					return <ProductBox product={e} key={e.productId} />;
				})}
			</div>
		</>
	);
};

export default ProductsHomePage;
