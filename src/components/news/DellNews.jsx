import React from "react";
import "../../style/css/dellNews.css";
import dell1 from "../../img/news/Alienware Aurora R16 Gaming Desktop.jpg";

const DellNews = () => {
	return (
		<>
			<div className="dell-news-scroller-container">
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
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
				<div className="dell-news-scroller-container__dell-news-box"></div>
			</div>
		</>
	);
};

export default DellNews;
