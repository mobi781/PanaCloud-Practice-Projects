import React from "react";
import shoe from "../data.json";
import { Link } from "react-router-dom";
// import shoe from "../data.json";
const ProductIndex = () => {
	return (
		<div>
			<div className="items">
				{Object.keys(shoe).map((keyName) => {
					const shoes = shoe[keyName];
					return (
						// keyName will provide us key further use on ProductDetails for more informationn to display with that
						<Link key={keyName} to={keyName}>
							<div
								className="card bg-light m-1 "
								style={{
									maxWidth: "250px",
									maxHeight: "325px",
								}}
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
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProductIndex;
