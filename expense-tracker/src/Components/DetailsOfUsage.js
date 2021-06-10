import React, { useContext } from "react";

//import Global State
import { Context } from "../Global/ContextApi";

const DetailsOfUsage = () => {
	const { transactions } = useContext(Context);
	// console.log("transactions in detailofusage :>> ", transactions);

	//create object for sum of all transactionsAmount
	const AllAmounts = transactions.map((transacion) => transacion.Amount);

	// differciate between income and expense
	const income = AllAmounts.filter((transaction) => transaction > 0)
		.reduce((acc, transaction) => (acc += transaction), 0)
		.toFixed(2);

	const expense = Math.abs(
		AllAmounts.filter((transaction) => transaction < 0)
			.reduce((acc, transaction) => (acc += transaction), 0)
			.toFixed(2)
	);

	return (
		<div className="detailsOfUsage">
			<div className="inc">
				<h4>INCOME</h4>
				<p className="money plus">${income}</p>
			</div>
			<div className="exp">
				<h4>EXPENCE</h4>
				<p className="money minus">${expense}</p>
			</div>
		</div>
	);
};

export default DetailsOfUsage;
