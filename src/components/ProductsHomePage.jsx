import React from "react";
import "../style/css/productsHomePage.css";
import ProductBox from "./ProductBox";
import products from "../objects/products";

const ProductsHomePage = () => {
	return (
		<>
			<div className="products-container">
				{products.hotDeals.map((e) => {
					return <ProductBox product={e} />;
				})}
			</div>
		</>
	);
};

export default ProductsHomePage;
