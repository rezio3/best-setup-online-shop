import React, { useContext } from "react";
import ProductBox from "../ProductBox";
import products from "../../objects/products";
import { FilterContext } from "../../context/FilterContext";
import pricesUpwards from "../../functions/sortItemsUpwards";
import pricesDownwards from "../../functions/sortItemsDownwards";
import sortPriceRange from "../../functions/sortPriceRange";
import NoProductsSpan from "../NoProductsSpan";

const ProductsPcPage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const {
		appliedFiltersPcCpu,
		appliedFiltersPcRam,
		appliedFiltersPcMemory,
		appliedFiltersPcGpu,
	} = filter;

	let itemsToDisplay = [...products.pc];

	if (appliedFiltersPcCpu.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersPcCpu.some(
				(element) => element === singleProduct.cpu
			);
		});
	}
	if (appliedFiltersPcRam.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersPcRam.some(
				(element) => element === singleProduct.ram
			);
		});
	}
	if (appliedFiltersPcMemory.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersPcMemory.some(
				(element) => element === singleProduct.memory
			);
		});
	}
	if (appliedFiltersPcGpu.length !== 0) {
		itemsToDisplay = itemsToDisplay.filter((singleProduct) => {
			return appliedFiltersPcGpu.some(
				(element) => element === singleProduct.gpu
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
				{itemsToDisplay.length === 0 ? <NoProductsSpan /> : null}
			</div>
		</>
	);
};

export default ProductsPcPage;
