import React, { useContext } from "react";
import { Context } from "../Global/ContextApi";

export const History = () => {
	const { transactions } = useContext(Context);
	const { delTransaction } = useContext(Context);
	const data = useContext(Context);
	console.log("globalcontext in history :>> ", data);
	console.log("globalcontext in history :>> ", new Date().getTime());

	return (
		<div>
			<h3>Transaction History</h3>
			<ul className="list">
				{transactions.map((transactions) => (
					<li
						key={transactions.id}
						className={transactions.Amount < 0 ? "minus" : "plus"}
					>
						{transactions.Desc}{" "}
						<span>
							{transactions.Amount < 0 ? "-" : ""}$
							{Math.abs(transactions.Amount)}
						</span>{" "}
						<button
							className="delete-btn"
							onClick={() => delTransaction(transactions.id)}
						>
							X
						</button>
					</li>
				))}

				{/* <li className="minus">Grocery <span>-$50</span> <button className="delete-btn">X</button></li> */}
			</ul>
		</div>
	);
};
