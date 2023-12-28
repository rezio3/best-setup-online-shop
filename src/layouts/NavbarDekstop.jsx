import React, { useState, useRef, useEffect, useContext } from "react";
import "../style/css/navbarDesktop.css";
import { NavLink } from "react-router-dom";
import logoImg from "../img/BestSetupLogo.png";
import { ProductsOrderContext } from "../context/OrderContext";
import CartWindow from "../components/CartWindow";

const NavbarDesktop = () => {
	const [snapNav, setSnapNav] = useState(false);
	const [logoNav, setLogoNav] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [order] = useContext(ProductsOrderContext);

	const navRef = useRef();
	const timeoutRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				entry.intersectionRatio === 0 ? setSnapNav(true) : setSnapNav(false);
				entry.intersectionRatio === 0
					? setLogoNav(true)
					: setTimeout(() => {
							timeoutRef.current = true;
							if (timeoutRef.current) {
								return;
							}
							setLogoNav(false);
							timeoutRef.current = false;
					  }, 600);
			},
			{ threshold: 1 }
		);
		observer.observe(navRef.current);
	}, []);

	const cartButtonHandler = () => {
		setCartOpen(!cartOpen);
	};

	let navLogo = logoNav ? "block" : "none";

	return (
		<>
			<div className="nav-treshhold" ref={navRef}></div>
			<nav className={snapNav ? "navbar-container sticky" : "navbar-container"}>
				<div className="navbar-container__empty-left-spacer"></div>
				<ul className="product-pages-buttons-container">
					<li className="product-pages-buttons-container__logo-menu-button">
						<NavLink to="/">
							<img
								src={logoImg}
								style={{ display: navLogo, opacity: 1 }}
								className={
									snapNav
										? "product-pages-buttons-container__logo-nav-img logo-in"
										: "product-pages-buttons-container__logo-nav-img logo-out"
								}
							/>
						</NavLink>
					</li>

					<li className="product-pages-buttons-container__nav-element">
						<NavLink to="/display">
							<button className="product-pages-buttons-container__nav-button">
								Display
							</button>
						</NavLink>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<NavLink to="/sound">
							<button className="product-pages-buttons-container__nav-button">
								Sound
							</button>
						</NavLink>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<NavLink to="/pc">
							<button className="product-pages-buttons-container__nav-button">
								PC
							</button>
						</NavLink>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<NavLink to="/accessories">
							<button className="product-pages-buttons-container__nav-button">
								Accessories
							</button>
						</NavLink>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<NavLink to="/comfort">
							<button className="product-pages-buttons-container__nav-button">
								Comfort
							</button>
						</NavLink>
					</li>
				</ul>
				<div className="cart-container">
					<button
						className="cart-container__cart-button"
						onClick={cartButtonHandler}
					>
						<span className="material-symbols-outlined cart-container__cart-icon">
							shopping_cart
						</span>
						{order.cart.length !== 0 ? (
							<div className="cart-container__items-counter-container">
								<span className="cart-container__items-counter">
									{order.cart.length}
								</span>
							</div>
						) : null}
					</button>
					<CartWindow />
				</div>
			</nav>
			<div className={snapNav ? "spacer" : ""}></div>
		</>
	);
};

export default NavbarDesktop;
