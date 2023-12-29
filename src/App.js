import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import OrderContext from "./context/OrderContext";
import CartWindow from "./components/cartwindow/CartWindow";

function App() {
	return (
		<Router>
			<div className="App">
				<OrderContext>
					<Header />
					<Navbar />
					<Page />
					<Footer />
					<CartWindow />
				</OrderContext>
			</div>
		</Router>
	);
}

export default App;
