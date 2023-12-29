import React from "react";

const ItemInCart = (props) => {
	return (
		<>
			<div className="cart-window-container__item-box">
				<img src={props.image} className="cart-window-container__item-img" />
				<span className="cart-window-container__item-name">{props.name}</span>
				<span className="cart-window-container__item-price">
					{props.price} $
				</span>
			</div>
		</>
	);
};

export default ItemInCart;
