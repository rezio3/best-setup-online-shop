import React from "react";
import "../../style/css/dellNews.css";
import "../../style/css/scrollCustom.css";
import dell1 from "../../img/news/Alienware Aurora R16 Gaming Desktop.jpg";
import dell2 from "../../img/news/PS5 Console - Marvel's Spider-Man 2 Bundle.jpg";
import dell3 from "../../img/news/Alienware 34 Curved QD-OLED Gaming Monitor - AW3424DWF.jpg";
import dell4 from "../../img/news/Alienware Aurora R15 Gaming Desktop.jpg";
import dell5 from "../../img/news/Bose QuietComfort Earbuds II - Triple Black.jpg";
import dell6 from "../../img/news/Nintendo Switch - OLED Model.jpg";
import dell7 from "../../img/news/Inpiron 24 All-In-One.jpg";
import dell8 from "../../img/news/Alienware m18 Gaming Laptop.jpg";
import dell9 from "../../img/news/Dell 27 Monitor - E2723H.jpg";
import DellProductBox from "./DellProductBox";
import DellNewsHeader from "./DellNewsHeader";

const DellNews = () => {
	const dellProductsArr = [
		{
			type: "PC | Gaming",
			name: "Alienware Aurora R16 Gaming Desktop",
			description: `Refined and simplified, the Aurora R16 is designed to be a more minimal and efficient desktop with improvements in every category.`,
			img: dell1,
			id: 1,
		},
		{
			type: "Console | PS",
			name: "Alienware 34 Curved QD-OLED Gaming Monitor - AW3424DWF",
			description: `Experience Marvel’s Spider-Man 2 with PS5 innovations. Feel the
			force of web-swinging with adaptive triggers, while haptic
			feedback responds to Peter Parker’s new symbiote abilities and
			Miles Morales’ evolved bio-electric skills.`,
			img: dell2,
			id: 2,
		},
		{
			type: "Monitor | Ultrawide",
			name: "PS5 Console - Marvel's Spider-Man 2 Bundle",
			description: `34" curved monitor with QD-OLED technology and AMD FreeSync™
			Premium Pro. Featuring infinite contrast ratio and VESA DisplayHDR
			TrueBlack 400 for an incredible front-of-screen performance.`,
			img: dell3,
			id: 3,
		},
		{
			type: "PC | Gaming",
			name: "Alienware Aurora R15 Gaming Desktop",
			description: `Alienware’s most advanced, thoughtfully designed and thermally
			efficient desktop yet. The Aurora R15 features an optional
			redesigned liquid cooling system and up to 19% more airflow over
			previous generations.`,
			img: dell4,
			id: 4,
		},
		{
			type: "Sound | Earphones",
			name: "Bose QuietComfort Earbuds II - Triple Black",
			description: `Bose QuietComfort® Earbuds II are the next generation of wireless
			listening. Enjoy the best in sound and noise cancellation that is
			perfectly yours.`,
			img: dell5,
			id: 5,
		},
		{
			type: "Console | Gaming",
			name: "Nintendo Switch - OLED Model",
			description: `OLED model includes a wide adjustable stand
			for more comfortable viewing angles, a dock with a wired LAN port
			for TV mode, 64GB of internal storage,
			and enhanced audio in Handheld and Tabletop modes.`,
			img: dell6,
			id: 6,
		},
		{
			type: "Gaming | Console",
			name: "Inpiron 24 All-In-One",
			description: `24-inch All-in-One desktop designed with stunning visuals.
			Featuring FHD IPS display, amazing audio, and the latest 13th Gen
			Intel® Core™ processors.`,
			img: dell7,
			id: 7,
		},
		{
			type: "Gaming | Laptop",
			name: "Alienware m18 Gaming Laptop",
			description: `Play like a boss with a high-powered, 18-inch laptop that features
			advanced Alienware Cryo-tech™ cooling, the latest processors and
			NVIDIA® GeForce RTX™ 40 Series graphics.`,
			img: dell8,
			id: 8,
		},
		{
			type: "	Display | Monitor",
			name: "Dell 27 Monitor - E2723H",
			description: `27-inch Full HD monitor featuring a wide viewing angle and an
			eco-conscious design at an accessible price.`,
			img: dell9,
			id: 9,
		},
	];
	return (
		<>
			<div className="dell-news-scroller-container vertical-scroll">
				<div className="spacer"></div>
				<DellNewsHeader />
				{dellProductsArr.map((e) => {
					return (
						<DellProductBox
							type={e.type}
							name={e.name}
							description={e.description}
							img={e.img}
							key={e.id}
						/>
					);
				})}
				<div className="spacer"></div>
			</div>
		</>
	);
};

export default DellNews;
