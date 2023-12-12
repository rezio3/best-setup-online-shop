import React from "react";
import "../style/css/footer.css";
import paymentMethod1 from "../img/payment-methods/payment-method-1.png";
import paymentMethod2 from "../img/payment-methods/payment-method-2.png";
import paymentMethod3 from "../img/payment-methods/payment-method-3.png";
import paymentMethod4 from "../img/payment-methods/payment-method-4.png";
import paymentMethod5 from "../img/payment-methods/payment-method-5.png";
import paymentMethod6 from "../img/payment-methods/payment-method-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import PaymentMethodsFooter from "../components/footer/PaymentMethodsFooter";
import LinkFooter from "../components/footer/LinkFooter";

const Footer = () => {
	const paymentMethodsArray = [
		{ img: paymentMethod1, alt: "first-payment-method" },
		{ img: paymentMethod2, alt: "second-payment-method" },
		{ img: paymentMethod3, alt: "third-payment-method" },
		{ img: paymentMethod4, alt: "fourth-payment-method" },
		{ img: paymentMethod5, alt: "fifth-payment-method" },
		{ img: paymentMethod6, alt: "sixth-payment-method" },
	];
	const footerLinksArray = {
		leftLinks: [
			"Terms & Conditions",
			"Privacy Policy",
			"Cookie Settings",
			"Right of Withdrawal",
			"Online Ordering Process",
			"Statutory Warranty Rights",
		],
		middleLinks: [
			"Shipping Costs and Delivery Times",
			"Help Centre",
			"Vouchers",
			"Contact us",
			"Serivce Overview",
		],
		rightLinks: ["About Us", "Jobs & Careers", "Blog", "Classified Ads"],
	};
	return (
		<>
			<footer className="footer-layout">
				<span className="payments-span">Shop and pay safely</span>
				<div className="footer-upper-container">
					<div className="footer-upper-container__payment-methods-box">
						{paymentMethodsArray.map((e) => {
							return (
								<PaymentMethodsFooter img={e.img} alt={e.alt} key={e.alt} />
							);
						})}
					</div>
				</div>
				<div className="footer-lower-container">
					<div className="footer-lower-container__box">
						{footerLinksArray.leftLinks.map((e) => {
							return <LinkFooter name={e} key={e} />;
						})}
					</div>
					<div className="footer-lower-container__box">
						{footerLinksArray.middleLinks.map((e) => {
							return <LinkFooter name={e} key={e} />;
						})}
					</div>
					<div className="footer-lower-container__box">
						{footerLinksArray.rightLinks.map((e) => {
							return <LinkFooter name={e} key={e} />;
						})}
						<div className="footer-lower-container__social-icons">
							<FontAwesomeIcon icon={faFacebook} className="social-icon" />
							<FontAwesomeIcon icon={faInstagram} className="social-icon" />
							<FontAwesomeIcon icon={faYoutube} className="social-icon" />
							<FontAwesomeIcon icon={faTwitter} className="social-icon" />
							<FontAwesomeIcon icon={faPinterest} className="social-icon" />
						</div>
					</div>
				</div>
				<div className="copyright-container">
					<span className="copyright-container__copyright-span">
						BestSetup GmbH 2023 &copy; All rights reserved
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
