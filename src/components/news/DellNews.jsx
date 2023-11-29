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
			description: `	Experience Marvel’s Spider-Man 2 with PS5 innovations. Feel the
			force of web-swinging with adaptive triggers, while haptic
			feedback responds to Peter Parker’s new symbiote abilities and
			Miles Morales’ evolved bio-electric skills.`,
			img: dell2,
			id: 2,
		},
		{
			type: "Monitor | Ultrawide",
			name: "PS5 Console - Marvel's Spider-Man 2 Bundle",
			description: `	34" curved monitor with QD-OLED technology and AMD FreeSync™
			Premium Pro. Featuring infinite contrast ratio and VESA DisplayHDR
			TrueBlack 400 for an incredible front-of-screen performance.`,
			img: dell1,
			id: 3,
		},
		{
			type: "PC | Gaming",
			name: "Alienware Aurora R16 Gaming Desktop",
			description: `Refined and simplified, the Aurora R16 is designed to be a more minimal and efficient desktop with improvements in every category.`,
			img: dell1,
			id: 4,
		},
		{
			type: "PC | Gaming",
			name: "Alienware Aurora R16 Gaming Desktop",
			description: `Refined and simplified, the Aurora R16 is designed to be a more minimal and efficient desktop with improvements in every category.`,
			img: dell1,
			id: 5,
		},
		{
			type: "PC | Gaming",
			name: "Alienware Aurora R16 Gaming Desktop",
			description: `Refined and simplified, the Aurora R16 is designed to be a more minimal and efficient desktop with improvements in every category.`,
			img: dell1,
			id: 6,
		},
		{
			type: "PC | Gaming",
			name: "Alienware Aurora R16 Gaming Desktop",
			description: `Refined and simplified, the Aurora R16 is designed to be a more minimal and efficient desktop with improvements in every category.`,
			img: dell1,
			id: 7,
		},
	];
	return (
		<>
			<div className="dell-news-scroller-container vertical-scroll">
				<div className="spacer"></div>
				<div className="dell-news-header-container">
					<h3 className="dell-news-box__header">BLACK FRIDAY</h3>
					<span className="dell-news-box__lower-span">
						with DELL Technologies
					</span>
					<p className="dell-news-box__promo-description">
						Explore the world of modern solutions at incredibly affordable
						prices! Inspiron, XPS, and gaming Alienware are now cheaper than
						ever! <br />
						<br />
					</p>
					<p className="dell-news-box__promo-description dell-news-box__promo-description-lower">
						What Awaits You: <br />
						- Inspiron and XPS in a mega promotion
						<br />
						- Powerful gaming machines from Alienware <br />
						- Free bonuses for Black Friday customers <br />- Free delivery – no
						strings attached!
					</p>
				</div>

				{dellProductsArr.map((e) => {
					console.log(e.name);
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

				{/* ------------------------------- 3 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell3}
							alt="PS5 Console - Marvel's Spider-Man 2 Bundle"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Monitor | Ultrawide
						</span>
						<h4 className="dell-news-box__product-name">
							PS5 Console - Marvel's Spider-Man 2 Bundle
						</h4>
						<p className="dell-news-box__product-description">
							34" curved monitor with QD-OLED technology and AMD FreeSync™
							Premium Pro. Featuring infinite contrast ratio and VESA DisplayHDR
							TrueBlack 400 for an incredible front-of-screen performance.
						</p>
					</div>
				</div>
				{/* ------------------------------- 4 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell4}
							alt="Alienware Aurora R15 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							PC | Gaming
						</span>
						<h4 className="dell-news-box__product-name">
							Alienware Aurora R15 Gaming Desktop
						</h4>
						<p className="dell-news-box__product-description">
							Alienware’s most advanced, thoughtfully designed and thermally
							efficient desktop yet. The Aurora R15 features an optional
							redesigned liquid cooling system and up to 19% more airflow over
							previous generations with improvements for gamers and creators
						</p>
					</div>
				</div>
				{/* ------------------------------- 5 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell5}
							alt="Alienware Aurora R15 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Sound | Earphones
						</span>
						<h4 className="dell-news-box__product-name">
							Bose QuietComfort Earbuds II - Triple Black
						</h4>
						<p className="dell-news-box__product-description">
							Bose QuietComfort® Earbuds II are the next generation of wireless
							listening. Enjoy the best in sound and noise cancellation that is
							perfectly yours.
						</p>
					</div>
				</div>
				{/* ------------------------------- 6 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell6}
							alt="Alienware Aurora R15 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Console | Gaming
						</span>
						<h4 className="dell-news-box__product-name">
							Nintendo Switch - OLED Model
						</h4>
						<p className="dell-news-box__product-description">
							In addition to a new screen with vivid colors and sharp contrast,
							the Nintendo Switch - OLED model includes a wide adjustable stand
							for more comfortable viewing angles, a dock with a wired LAN port
							for TV mode (LAN cable sold separately), 64GB of internal storage,
							and enhanced audio in Handheld and Tabletop modes using the
							system’s speakers.
						</p>
					</div>
				</div>
				{/* ------------------------------- 7 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell7}
							alt="Alienware Aurora R15 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Gaming | Console
						</span>
						<h4 className="dell-news-box__product-name">
							Inpiron 24 All-In-One
						</h4>
						<p className="dell-news-box__product-description">
							24-inch All-in-One desktop designed with stunning visuals.
							Featuring FHD IPS display, amazing audio, and the latest 13th Gen
							Intel® Core™ processors.
						</p>
					</div>
				</div>
				{/* ------------------------------- 8 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell8}
							alt="Alienware Aurora R15 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Gaming | Laptop
						</span>
						<h4 className="dell-news-box__product-name">
							Alienware m18 Gaming Laptop
						</h4>
						<p className="dell-news-box__product-description">
							Play like a boss with a high-powered, 18-inch laptop that features
							advanced Alienware Cryo-tech™ cooling, the latest processors and
							NVIDIA® GeForce RTX™ 40 Series graphics.
						</p>
					</div>
				</div>
				{/* ------------------------------- 9 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell9}
							alt="Alienware Aurora R15 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Display / Monitor
						</span>
						<h4 className="dell-news-box__product-name">
							Dell 27 Monitor - E2723H
						</h4>
						<p className="dell-news-box__product-description">
							27-inch Full HD monitor featuring a wide viewing angle and an
							eco-conscious design at an accessible price.
						</p>
					</div>
				</div>
				<div className="spacer"></div>
			</div>
		</>
	);
};

export default DellNews;
