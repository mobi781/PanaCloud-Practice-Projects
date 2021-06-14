import React from "react";
import { useParams } from "react-router";
import shoe from "../data.json";

const ProductDetails = () => {
	const { pID } = useParams();
	console.log("pID :>> ", pID);
	return (
		<div>
			<h2>Product Detail</h2>
			<h1 className="badge bg-primary">{shoe[pID].name}</h1>{" "}
			<p>
				<a
					// style={{ textDecoration: None }}
					className="badge bg-info pchase no-style"
					href={shoe[pID].dUrl}
				>
					{" "}
					PURCHASE
				</a>
			</p>
			<img src={shoe[pID].img} alt={shoe[pID].name} />
		</div>
	);
};

export default ProductDetails;
