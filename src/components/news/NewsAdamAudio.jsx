import React from "react";
import "../../style/css/newsAdamAudio.css";
import adam1 from "../../img/news/adam-audio-a4v-studio-monitor-navigation-566x566px.png";
import adam2 from "../../img/news/adam-audio-a7v-studio-monitor-navigation-566x566px.png";
import adam3 from "../../img/news/adam-audio-a44h-studio-monitor-navigation-566x566px.png";

const NewsAdamAudio = () => {
	return (
		<div className="adam-audio-container">
			<h2 className="adam-audio-container__header">Adam Audio A SERIES</h2>
			<h3 className="adam-audio-container__header">
				A SERIES NOMINATED FOR 39TH TEC AWARDS
			</h3>
			<div className="adam-audio-container__description">
				<p>
					The ADAM Audio A Series delivers highly accurate, transparent sound
					across a full line of monitors that can be controlled remotely and in
					real time. Comprising five models, the A4V, A7V, A44H, A77H and A8H
					are the right fit for an array of professional and home studios—as
					well as broadcast, fixed-installation, 3D, immersive, and home audio
					environments.
				</p>
				<p>
					ADAM Audio monitors have earned a worldwide reputation as the
					pre-eminent tool for sound engineers based on our technological
					innovations in the field of loudspeaker technology. These advances
					have helped to define the immediately identifiable sonic
					characteristics of our loudspeakers: accurate and transparent, with
					high definition.
				</p>
			</div>
			<div className="adam-audio-container__image-boxes-container">
				<div className="adam-audio-container__image-box">
					<img src={adam1} className="adam-image" />
				</div>
				<div className="adam-audio-container__image-box">
					<img src={adam2} className="adam-image" />
				</div>
				<div className="adam-audio-container__image-box">
					<img src={adam3} className="adam-image" />
				</div>
			</div>
		</div>
	);
};

export default NewsAdamAudio;
