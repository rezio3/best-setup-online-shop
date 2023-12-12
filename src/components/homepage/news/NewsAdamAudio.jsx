import React from "react";
import "../../../style/css/newsAdamAudio.css";
import adam1 from "../../../img/news/adam-audio-a4v-studio-monitor-navigation-566x566px.png";
import adam2 from "../../../img/news/adam-audio-a7v-studio-monitor-navigation-566x566px.png";
import adam3 from "../../../img/news/adam-audio-a44h-studio-monitor-navigation-566x566px.png";
import AdamAudioProduct from "./AdamAudioProduct";
import AdamAudioDescription from "./AdamAudioDescription";

const NewsAdamAudio = () => {
	const adamAudioProducts = [
		{ name: "A4V", description: "Quality Compacted", image: adam1 },
		{ name: "A7V", description: "A New Industry Standard", image: adam2 },
		{ name: "A44H", description: "High Standards, Low Profile", image: adam3 },
	];
	return (
		<div className="adam-audio-container">
			<h2 className="adam-audio-container__upper-header">
				Adam Audio A SERIES
			</h2>
			<h3 className="adam-audio-container__lower-header">
				A SERIES NOMINATED FOR 39TH TEC AWARDS
			</h3>
			<div className="adam-audio-container__description-box">
				<AdamAudioDescription />
			</div>
			<div className="adam-audio-container__image-boxes-container">
				{adamAudioProducts.map((e) => {
					return (
						<AdamAudioProduct
							name={e.name}
							description={e.description}
							image={e.image}
							key={e.name}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NewsAdamAudio;
