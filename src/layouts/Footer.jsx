import React from "react";
import "../style/css/footer.css";
import paymentMethod1 from "../img/payment-methods/payment-method-1.png";
import paymentMethod2 from "../img/payment-methods/payment-method-2.png";
import paymentMethod3 from "../img/payment-methods/payment-method-3.png";
import paymentMethod4 from "../img/payment-methods/payment-method-4.png";
import paymentMethod5 from "../img/payment-methods/payment-method-5.png";
import paymentMethod6 from "../img/payment-methods/payment-method-6.png";

const Footer = () => {
	return (
		<>
			<footer className="footer-layout">
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
						<span>Terms & Conditions</span>
						<span>Privacy Policy</span>
						<span>Cookie Settings</span>
						<span>Right of Withdrawal</span>
						<span>Online Ordering Process</span>
						<span>Statutory Warranty Rights</span>
					</div>
					<div className="footer-lower-container__box">
						<span>Shipping Costs and Delivery Times</span>
						<span>Help Centre</span>
						<span>Vouchers</span>
						<span>Contact us</span>
						<span>Serivce Overview</span>
					</div>
					<div className="footer-lower-container__box">
						<span>About Us</span>
						<span>Jobs & Careers</span>
						<span>Blog</span>
						<span>Classified Ads</span>
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
