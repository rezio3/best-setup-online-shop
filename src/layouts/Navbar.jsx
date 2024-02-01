import React from "react";
import NavbarDesktop from "./NavbarDekstop";
import NavbarMobile from "./NavbarMobile";
import Media from "react-media";

const Navbar = () => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? <NavbarDesktop /> : <NavbarMobile />;
				}}
			</Media>
		</>
	);
};

export default Navbar;
