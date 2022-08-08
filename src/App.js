import Landing from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
