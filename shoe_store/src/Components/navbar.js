import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Products from "Products.js";
function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
			<div className="container-fluid">
				{/* <a className="navbar-brand" href="#">
					ShoeStore
				</a> */}
				<Link className="navbar-brand" to="/">
					SHOE STORE
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<Link to="products">Products</Link>
					{/* <ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
					</ul> */}
				</div>
			</div>
		</nav>
	);
}

export default Header;
