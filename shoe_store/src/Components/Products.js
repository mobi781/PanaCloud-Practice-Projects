import React from "react";
// import Header from "./navbar.js";
import shoe from "../data.json";

const Products = () => {
	console.log("data.json :>> ", Object.keys(shoe));
	return (
		<div className="text-center m-4 ">
			<h1 className="mb-5">PRODUCTS</h1>

			<div className="items">
				{Object.keys(shoe).map((keyName) => {
					const shoes = shoe[keyName];
					return (
						<div
							key={keyName}
							className="card bg-light m-1 "
							style={{ maxWidth: "250px", maxHeight: "325px" }}
						>
							<img
								src={shoes.img}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{shoes.name}</h5>
							</div>
						</div>
					);
				})}
			</div>
			{/* <div>
				{Object.keys(shoe).map((keyName) => {
					return <h2 key={keyName}>{shoe[keyName]}</h2>;
				})}
			</div> */}
		</div>
	);
};

export default Products;
