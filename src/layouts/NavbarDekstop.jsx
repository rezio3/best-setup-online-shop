import React, { useState, useRef, useEffect } from "react";
import "../style/css/navbarDesktop.css";
import { Link } from "react-router-dom";

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
						<Link to="/display">
							<button className="product-pages-buttons-container__nav-button">
								Display
							</button>
						</Link>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<Link to="/sound">
							<button className="product-pages-buttons-container__nav-button">
								Sound
							</button>
						</Link>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<Link to="/pc">
							<button className="product-pages-buttons-container__nav-button">
								PC
							</button>
						</Link>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<Link to="/accessories">
							<button className="product-pages-buttons-container__nav-button">
								Accessories
							</button>
						</Link>
					</li>
					<li className="product-pages-buttons-container__nav-element">
						<Link to="/comfort">
							<button className="product-pages-buttons-container__nav-button">
								Comfort
							</button>
						</Link>
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
