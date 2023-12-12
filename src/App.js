import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Navbar />
				<Page />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
