import React, { useContext } from "react";
import CartFinal from "./CartFinal";
import "../../style/css/cartPage.css";
import { ProductsOrderContext } from "../../context/OrderContext";
import FinalCartLowerBox from "./FinalCartLowerBox";
import EmptyCartFinal from "./EmptyCartFinal";

const CartPage = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);
	return (
		<>
			<div className="cart-page-wrapper">
				{order.cart.length !== 0 ? <CartFinal /> : <EmptyCartFinal />}
				<FinalCartLowerBox />
			</div>
		</>
	);
};

export default CartPage;
