import React, { useEffect } from "react";
import gsap from "gsap";

const Banner = (props) => {
	useEffect(() => {
		let moveLeftOrRight;
		props.clicked === "left"
			? (moveLeftOrRight = -1200)
			: (moveLeftOrRight = 1200);
		gsap.from(`.baner-bg${props.state}`, {
			duration: 0.4,
			x: moveLeftOrRight,
			ease: "power3",
		});
	}, [props.state]);

	return <div className={props.class}></div>;
};

export default Banner;
