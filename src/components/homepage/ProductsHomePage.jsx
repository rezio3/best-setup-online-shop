import React, { useContext } from "react";
import "../../style/css/productBox.css";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";

const ProductsHomePage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const { displays, sounds, pc, accessories, comfort } = filter;
	let hotDealCopyArr = [...products.hotDeals];
	let itemsToDisplay = [];
	// sort products depending on selected filter types
	for (let key in products.hotDeals) {
		if (
			(products.hotDeals[key].type === "displays" && displays) ||
			(products.hotDeals[key].type === "sounds" && sounds) ||
			(products.hotDeals[key].type === "pc" && pc) ||
			(products.hotDeals[key].type === "accessories" && accessories) ||
			(products.hotDeals[key].type === "comfort" && comfort)
		) {
			itemsToDisplay.push(hotDealCopyArr[key]);
		} else if (!displays && !sounds && !pc && !accessories && !comfort) {
			itemsToDisplay = hotDealCopyArr;
		}
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

export default ProductsHomePage;
