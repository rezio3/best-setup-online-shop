import React, { useContext } from "react";
import { ProductsOrderContext } from "../../context/OrderContext";
import "../../style/css/cartFinal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ItemInCartFinal from "./ItemInCartFinal";
import TotalPriceWindow from "../TotalPriceWindow";
import { NavLink } from "react-router-dom";

const CartFinal = () => {
	const [order, setOrder] = useContext(ProductsOrderContext);

	const deleteCartHandler = () => {
		setOrder({
			...order,
			cart: [],
			insurances: [],
		});
	};

	// const navigate = useNavigate();
	// const backBtnHandler = () => {
	// 	navigate(-1);
	// };

	return (
		<>
			<div className="final-cart-wrapper">
				<div className="cart-inner-wrapper">
					<div className="cart-container">
						<div className="cart-container__header-box">
							<h3 className="cart-container__header">
								Cart{" "}
								<span className="cart-container__header--gray">
									({order.getProductsQuantity()})
								</span>
							</h3>
							<button
								className="cart-container__clear-cart-btn"
								onClick={deleteCartHandler}
							>
								Clear cart
								<FontAwesomeIcon
									icon={faTrash}
									className="cart-container__trash-icon"
								/>
							</button>
						</div>
						<div className="cart-box">
							{order.cart.map((e) => {
								return (
									<ItemInCartFinal
										image={e.img}
										name={e.name}
										price={e.price}
										key={e.name}
									/>
								);
							})}
						</div>
					</div>
					<TotalPriceWindow
						linkTo={"/cart/delivery"}
						btnText={"Proceed to delivery"}
					/>
				</div>
				<NavLink to="/">
					<button
						className="cart-page-wrapper__back-to-shopping-btn button-anim"
						// onClick={backBtnHandler}
					>
						<FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
						Back to shopping
					</button>
				</NavLink>
			</div>
		</>
	);
};

export default CartFinal;
