import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../style/css/navbarMobile.css";
import logoImg from "../img/BestSetupLogo.png";
import { ProductsOrderContext } from "../context/OrderContext";
import { cartButtonHandler } from "../functions/cartButtonHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const NavbarMobile = () => {
	const [burgerIconActive, setBurgerIconActive] = useState(false);
	const [snapNav, setSnapNav] = useState(false);
	const [logoNav, setLogoNav] = useState(false);
	// const [logoAnimOut, setLogoAnimOut] = useState(false);
	const [order, setOrder] = useContext(ProductsOrderContext);

	const navRef = useRef();
	const timeoutRef = useRef(null);

	const location = useLocation();
	const isFinalCartPage = location.pathname.includes("/cart");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				entry.intersectionRatio === 0 ? setSnapNav(true) : setSnapNav(false);
				if (entry.intersectionRatio === 0) {
					setLogoNav(true);
					timeoutRef.current = true;
				} else {
					// TO FIX
					if (timeoutRef.current) {
						return;
					}
					setTimeout(() => {
						setLogoNav(false);
						timeoutRef.current = false;
					}, 600);
				}
			},
			{ threshold: 0 }
		);
		observer.observe(navRef.current);
	}, []);

	const cartButtonHandlerInner = () => {
		cartButtonHandler(order, setOrder);
	};

	let navLogo = logoNav ? "block" : "none";

	let totalProductsQuantity = order.getProductsQuantity();

	const burgerIconHandler = () => {
		setBurgerIconActive(!burgerIconActive);
	};

	useEffect(() => {
		if (burgerIconActive) {
			burgerIconHandler();
		}
	}, [location]);

	useEffect(() => {
		if (burgerIconActive) {
			gsap.from("#navButtonsContainer", {
				duration: 0.4,
				x: -250,
				ease: "power3",
			});
		}
	}, [burgerIconActive, location]);

	return (
		<>
			<div className="nav-treshhold" ref={navRef}></div>
			<nav
				className={
					snapNav ? "navbar-container-mobile sticky" : "navbar-container-mobile"
				}
			>
				<FontAwesomeIcon
					icon={faBars}
					className="burger-icon"
					onClick={burgerIconHandler}
				/>
				<div className="product-pages-buttons-container__logo-menu-button">
					<NavLink to="/">
						{/* <Anim snapNav={snapNav} setSnapNav={setSnapNav} /> */}
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
				</div>
				<ul
					className={
						burgerIconActive
							? "product-pages-buttons-container"
							: "product-pages-buttons-container product-pages-buttons-container--off"
					}
					id="navButtonsContainer"
				>
					<li
						className="product-pages-buttons-container__x-btn"
						onClick={burgerIconHandler}
					>
						<FontAwesomeIcon icon={faXmark} className="XIcon" />
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
						onClick={isFinalCartPage ? null : cartButtonHandlerInner}
					>
						<span className="material-symbols-outlined cart-container__cart-icon">
							shopping_cart
						</span>
						{order.cart.length !== 0 ? (
							<div className="cart-container__items-counter-container">
								<span className="cart-container__items-counter">
									{totalProductsQuantity}
								</span>
							</div>
						) : null}
					</button>
				</div>
			</nav>
			<div className={snapNav ? "spacer" : ""}></div>
		</>
	);
};

export default NavbarMobile;
