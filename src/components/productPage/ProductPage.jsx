import React from "react";
import "../../style/css/productPage.css";
import { useParams } from "react-router-dom";
import products from "../../objects/products";

const ProductPage = () => {
	const { page, productId } = useParams();

	const singleProduct = products[page].find(
		(e) => e.productId === Number(productId)
	);

	return (
		<>
			<img src={singleProduct.img} />
		</>
	);
};

export default ProductPage;
