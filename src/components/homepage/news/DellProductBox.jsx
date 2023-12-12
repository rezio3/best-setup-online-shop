import React from "react";

const DellProductBox = (props) => {
	return (
		<>
			<div className="dell-news-box">
				<div className="dell-news-box__image-container">
					<img
						src={props.img}
						alt="Alienware Aurora R16 Gaming Desktop"
						className="dell-news-box__image"
					/>
				</div>

				<div className="dell-news-box__description-container">
					<div className="dell-news-box__product-header-container">
						<span className="dell-news-box__product-type-span">
							{props.type}
						</span>
						<h4 className="dell-news-box__product-name">{props.name}</h4>
					</div>

					<p className="dell-news-box__product-description">
						{props.description}
					</p>
				</div>
			</div>
		</>
	);
};

export default DellProductBox;
