import React from "react";
import { Outlet } from "react-router";
// import Header from "./navbar.js";
// import { Link } from "react-router-dom";
const Products = () => {
	// console.log("data.json :>> ", Object.keys(shoe));
	// console.log("data.json :>> ", shoe);
	return (
		<div className="text-center m-4 ">
			<h1 className="mb-5">PRODUCTS</h1>
			<hr />
			<Outlet />

			{/* <div>
				{Object.keys(shoe).map((keyName) => {
					return <h2 key={keyName}>{shoe[keyName]}</h2>;
				})}
			</div> */}
		</div>
	);
};

export default Products;
