import React from "react";
import "../../style/css/dellNews.css";
import dell1 from "../../img/news/Alienware Aurora R16 Gaming Desktop.jpg";
import dell2 from "../../img/news/PS5 Console - Marvel's Spider-Man 2 Bundle.jpg";
import dell3 from "../../img/news/Alienware 34 Curved QD-OLED Gaming Monitor - AW3424DWF.jpg";

const DellNews = () => {
	return (
		<>
			<div className="dell-news-scroller-container">
				{/* --------------------------------- 1 ------------------------ */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell1}
							alt="Alienware Aurora R16 Gaming Desktop"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							PC | Gaming
						</span>
						<h4 className="dell-news-box__product-name">
							Alienware Aurora R16 Gaming Desktop
						</h4>
						<p className="dell-news-box__product-description">
							Refined and simplified, the Aurora R16 is designed to be a more
							minimal and efficient desktop with improvements in every category.
						</p>
					</div>
				</div>
				{/* ----------------------------- 2 ---------------------------- */}
				<div className="dell-news-box">
					<div className="dell-news-box__image-container">
						<img
							src={dell2}
							alt="Alienware 34 Curved QD-OLED Gaming Monitor - AW3424DWF"
							className="dell-news-box__image"
						/>
					</div>

					<div className="dell-news-box__description-container">
						<span className="dell-news-box__product-type-span">
							Console | PS
						</span>
						<h4 className="dell-news-box__product-name">
							Alienware 34 Curved QD-OLED Gaming Monitor - AW3424DWF
						</h4>
						<p className="dell-news-box__product-description">
							Experience Marvel’s Spider-Man 2 with PS5 innovations. Feel the
							force of web-swinging with adaptive triggers, while haptic
							feedback responds to Peter Parker’s new symbiote abilities and
							Miles Morales’ evolved bio-electric skills.
						</p>
					</div>
				</div>
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
			</div>
		</>
	);
};

export default DellNews;
