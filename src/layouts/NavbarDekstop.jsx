import React, { useState, useRef, useEffect } from "react";
import "../style/css/navbarDesktop.css";

const NavbarDesktop = () => {
	const [snapNav, setSnapNav] = useState(false);

	const navRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				entry.intersectionRatio === 0 ? setSnapNav(true) : setSnapNav(false);
			},
			{ threshold: 1 }
		);
		observer.observe(navRef.current);
	}, []);

	return (
		<>
			<div className="nav-treshhold" ref={navRef}></div>
			<nav className={snapNav ? "navbar-container sticky" : "navbar-container"}>
				<div className="navbar-container__empty-left-spacer"></div>
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
				<div className="cart-container">
					<button className="cart-container__cart-button">
						<span className="material-symbols-outlined cart-container__cart-icon">
							shopping_cart
						</span>
					</button>
				</div>
			</nav>
			<div className={snapNav ? "spacer" : ""}></div>
		</>
	);
};

export default NavbarDesktop;
