import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import OrderContext from "./context/OrderContext";
import CartWindow from "./components/cartwindow/CartWindow";
// import { useState } from "react";
import "./style/css/buttonsAnim.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	// const [ok, setOk] = useState(true);
	// const okBtnHandler = () => {
	// 	setOk(false);
	// };
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					<OrderContext>
						<Header />
						<Navbar />
						<Page />
						<Footer />
						<CartWindow />
					</OrderContext>
					{/* <div
						className={
							ok ? "in-progress-box" : "in-progress-box in-progress-box--off"
						}
					>
						<h2 className="in-progress-box__header">
							This shop ain't working yet!
						</h2>
						<span className="in-progress-span">
							Project is currently in progress...
						</span>
						<span className="in-progress-span">
							So far, you can browse products, filter them and add them to the
							cart.
						</span>
						<button className="ok-btn button-anim" onClick={okBtnHandler}>
							Ok
						</button>
					</div> */}
				</div>
			</ScrollToTop>
		</Router>
	);
}

export default App;
