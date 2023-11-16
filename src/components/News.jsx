import React from "react";
import "../style/css/news.css";
import NewsAdamAudio from "./news/NewsAdamAudio";
import DellNews from "./news/DellNews";

const News = () => {
	return (
		<div className="news-container">
			<NewsAdamAudio />
			<DellNews />
		</div>
	);
};

export default News;
