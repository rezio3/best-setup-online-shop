import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Question = (props) => {
	const [description, setDescription] = useState(false);

	const expandAnswer = () => {
		setDescription(!description);
	};

	return (
		<>
			<div className="single-question-container" onClick={expandAnswer}>
				<div className="single-question-container__header-container">
					<h5 className="single-question-container__header">
						{props.question}
					</h5>
					<FontAwesomeIcon
						icon={faChevronDown}
						className="single-question-container__arrow"
						style={description ? { rotate: "180deg" } : { rotate: "0deg" }}
					/>
				</div>
				<div
					className="single-question-container__description-container"
					style={description ? { height: "100px" } : { height: "0" }}
				>
					<p className="single-question-container__answer">{props.answer}</p>
				</div>
			</div>
		</>
	);
};

export default Question;
