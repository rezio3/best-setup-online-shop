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
				"Indeed, there is a minimum purchase amount required to take advantage of the 0% installment offer, ensuring eligibility for this financing option.",
		},
		{
			question:
				"What is the financing period for equipment using 0% installments?",
			answer:
				"The financing period for equipment using 0% installments varies based on the specific terms offered during the checkout process, providing flexibility to meet your needs.",
		},
		{
			question: "Can I use other payment methods along with voucher financing?",
			answer:
				"Certainly, you can combine voucher financing with other payment methods, allowing you to tailor your payment approach according to your preferences.",
		},
		{
			question:
				"Does the 0% installment offer cover all products available in the store?",
			answer:
				"The 0% installment offer extends to a diverse selection of products available in the store, offering flexibility and accessibility for various purchases.",
		},
		{
			question: "What documents are required to use voucher financing?",
			answer:
				"To utilize voucher financing, typically you'll need to provide standard identification documents and any additional details specified during the checkout process, streamlining the financing application.",
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
