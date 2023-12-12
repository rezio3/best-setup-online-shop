import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Banner = (props) => {
	let [recentBanner, setRecentBanner] = useState(props.state);

	useEffect(() => {
		let moveLeftOrRight;
		props.clicked === "left"
			? (moveLeftOrRight = -1200)
			: (moveLeftOrRight = 1200);

		let ctx = gsap.context(() => {
			gsap.from(`.baner-bg${props.state}`, {
				duration: 0.4,
				x: moveLeftOrRight,
				ease: "power3",
			});
		});
		return () => ctx.revert();
	}, [props.state, props.clicked]);
	setTimeout(() => {
		setRecentBanner(props.state);
	}, 400);
	return (
		<>
			<div className={`baner-bg${recentBanner} baner-bg`}></div>
			<div className={`baner-bg${props.state} baner-bg`}></div>
		</>
	);
};

export default Banner;
