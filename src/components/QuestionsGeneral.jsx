import React from "react";
import "../style/css/questions.css";
import Question from "./Question";

const QuestionsGeneral = () => {
	const questionsArray = [
		{
			question: "How can I use equipment financing with a voucher?",
			answer: `To use equipment financing with a voucher, simply choose the
				financing option at checkout, and follow the prompts to complete the
				process.`,
		},
		{
			question:
				"Is there a minimum purchase amount to take advantage of the 0% installment offer?",
			answer:
				"To use equipment financing with a voucher, simply choose the financing option at checkout, and follow the prompts to complete the process.",
		},
		{
			question:
				"What is the financing period for equipment using 0% installments?",
			answer:
				"To use equipment financing with a voucher, simply choose the financing option at checkout, and follow the prompts to complete the process.",
		},
		{
			question: "Can I use other payment methods along with voucher financing?",
			answer:
				"To use equipment financing with a voucher, simply choose the financing option at checkout, and follow the prompts to complete the process.",
		},
		{
			question:
				"Does the 0% installment offer cover all products available in the store?",
			answer:
				"To use equipment financing with a voucher, simply choose the financing option at checkout, and follow the prompts to complete the process.",
		},
		{
			question: "What documents are required to use voucher financing?",
			answer:
				"To use equipment financing with a voucher, simply choose the financing option at checkout, and follow the prompts to complete the process.",
		},
	];
	return (
		<>
			<div className="questions-wrapper">
				<h3 className="questions-wrapper__header">
					Frequently Asked Questions
				</h3>
				{questionsArray.map((e) => (
					<Question question={e.question} answer={e.answer} key={e.question} />
				))}
			</div>
		</>
	);
};

export default QuestionsGeneral;
