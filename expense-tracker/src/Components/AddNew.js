import React, { useState, useContext } from "react";
import { Context } from "../Global/ContextApi";

const AddNew = () => {
	const { addTransaction } = useContext(Context);
	// let { Addtransaction, Transactions } = useContext(Context);
	let [Description, setDescription] = useState("");
	let [DescriptionAmount, setDescriptionAmount] = useState();
	const onsubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: new Date().getTime(),
			Desc: Description,
			Amount: parseInt(DescriptionAmount),
			//we can use "+DescriptionAmount," it will convert it into a number other wise it parse as string
		};
		addTransaction(newTransaction);
	};

	return (
		<div>
			<h3>Add Transactions</h3>
			<form className="form" onSubmit={onsubmit}>
				<label>
					<strong>Description</strong>
				</label>
				<input
					type="text"
					placeholder="Plaese Enter the transaction detail"
					value={Description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>

				<label>
					<strong>Amount</strong>
					<br />
					For Expense use "-" sign before amount
				</label>
				<input
					// value={DescriptionAmount}
					type="number"
					placeholder="Plaese Enter the amount"
					value={DescriptionAmount}
					onChange={(e) => {
						setDescriptionAmount(e.target.value);
					}}
				/>
				<button
					className="btn"
					type="submit"
					value="ADD TRANSACTION"
					// onClick={handleChange}
				>
					ADD TRANSACTION
				</button>
			</form>
		</div>
	);
};

export default AddNew;
