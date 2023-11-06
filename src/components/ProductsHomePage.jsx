import React, { useContext } from "react";
import "../style/css/productsHomePage.css";
import ProductBox from "./ProductBox";
import products from "../objects/products";
import { FilterContext } from "../context/FilterContext";

const ProductsHomePage = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const { displays, sounds, pc, accessories, comfort } = filter;
	let itemsToDisplay = [];

	for (let key in products.hotDeals) {
		if (products.hotDeals[key].type === "displays" && displays) {
			itemsToDisplay.push(products.hotDeals[key]);
			console.log(products.hotDeals[key]);
		} else if (!displays && !sounds && !pc && !accessories && !comfort) {
			itemsToDisplay = products.hotDeals;
		}
	}
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
