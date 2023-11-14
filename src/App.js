import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";

function App() {
	return (
		<div className="App">
			<Header />
			<Navbar />
			<Page />
			<Footer />
		</div>
	);
}

export default App;
