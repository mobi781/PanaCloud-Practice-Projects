import React from "react";
import Header from "./Components/navbar";
import Welcome from "./Components/Welcome.js";
import Products from "./Components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function RouteConfig() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</Router>
		</div>
	);
}

export default RouteConfig;
