import React from "react";
import "../../style/css/productPage.css";
import { useParams } from "react-router-dom";
import products from "../../objects/products";
import DisplayProduct from "./DisplayProduct";

const SingleProductPage = () => {
	const { page, productId } = useParams();

	const singleProduct = products[page].find(
		(e) => e.productId === Number(productId)
	);
	const ProductToRender = () => {
		if (page === "display") {
			return <DisplayProduct singleProduct={singleProduct} />;
		}
	};

	return (
		<>
			<div className="product-page-wrapper">
				<ProductToRender />
			</div>
		</>
	);
};

export default SingleProductPage;
