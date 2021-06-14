import React from "react";
import Header from "./Components/navbar";
import Welcome from "./Components/Welcome.js";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
import ProductIndex from "./Components/ProductIndex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function RouteConfig() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="products" element={<Products />}>
						<Route path="/" element={<ProductIndex />} />
						<Route path=":pID" element={<ProductDetails />} />
					</Route>
					{/* <Route path=":slug" element={<LaunchShoe />} /> */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}
function NotFound() {
	return (
		<h1 className="text-center mt-5 align-middle">Ooops! Page Not Found</h1>
	);
}

export default RouteConfig;
