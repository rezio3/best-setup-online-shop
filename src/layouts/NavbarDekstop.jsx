import React from "react";
import "../style/css/navbarDesktop.css";

const NavbarDesktop = () => {
	return (
		<div className="navbar-container">
			<ul className="product-pages-buttons-container">
				<li className="product-pages-buttons-container__nav-element">
					<button className="product-pages-buttons-container__nav-button">
						Display
					</button>
				</li>
				<li className="product-pages-buttons-container__nav-element">
					<button className="product-pages-buttons-container__nav-button">
						Sound
					</button>
				</li>
				<li className="product-pages-buttons-container__nav-element">
					<button className="product-pages-buttons-container__nav-button">
						PC
					</button>
				</li>
				<li className="product-pages-buttons-container__nav-element">
					<button className="product-pages-buttons-container__nav-button">
						Accessories
					</button>
				</li>
				<li className="product-pages-buttons-container__nav-element">
					<button className="product-pages-buttons-container__nav-button">
						Comfort
					</button>
				</li>
			</ul>
			<div className="cart-container"></div>
		</div>
	);
};

export default NavbarDesktop;
