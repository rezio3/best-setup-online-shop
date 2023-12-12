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

const Footer = () => {
	return (
		<>
			<footer className="footer-layout">
				<span className="payments-span">Shop and pay safely</span>
				<div className="footer-upper-container">
					<div className="footer-upper-container__payment-methods-box">
						<img
							src={paymentMethod1}
							alt="first-payment-method"
							className="footer-upper-container__payment-icon"
						/>
						<img
							src={paymentMethod2}
							alt="second-payment-method"
							className="footer-upper-container__payment-icon"
						/>
						<img
							src={paymentMethod3}
							alt="third-payment-method"
							className="footer-upper-container__payment-icon"
						/>
						<img
							src={paymentMethod4}
							alt="fourth-payment-method"
							className="footer-upper-container__payment-icon"
						/>
						<img
							src={paymentMethod5}
							alt="fifth-payment-method"
							className="footer-upper-container__payment-icon"
						/>
						<img
							src={paymentMethod6}
							alt="sixth-payment-method"
							className="footer-upper-container__payment-icon"
						/>
					</div>
				</div>
				<div className="footer-lower-container">
					<div className="footer-lower-container__box">
						<span className="footer-lower-container__link">
							Terms & Conditions
						</span>
						<span className="footer-lower-container__link">Privacy Policy</span>
						<span className="footer-lower-container__link">
							Cookie Settings
						</span>
						<span className="footer-lower-container__link">
							Right of Withdrawal
						</span>
						<span className="footer-lower-container__link">
							Online Ordering Process
						</span>
						<span className="footer-lower-container__link">
							Statutory Warranty Rights
						</span>
					</div>
					<div className="footer-lower-container__box">
						<span className="footer-lower-container__link">
							Shipping Costs and Delivery Times
						</span>
						<span className="footer-lower-container__link">Help Centre</span>
						<span className="footer-lower-container__link">Vouchers</span>
						<span className="footer-lower-container__link">Contact us</span>
						<span className="footer-lower-container__link">
							Serivce Overview
						</span>
					</div>
					<div className="footer-lower-container__box">
						<span className="footer-lower-container__link">About Us</span>
						<span className="footer-lower-container__link">Jobs & Careers</span>
						<span className="footer-lower-container__link">Blog</span>
						<span className="footer-lower-container__link">Classified Ads</span>
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
