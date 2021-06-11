import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
	transactions: [
		// { id: 1, Desc: "Project 2 complete", Amount: 500 },
		// { id: 2, Desc: "Project 1 complete", Amount: 40 },
		// { id: 3, Desc: "Grocery", Amount: -500 },
	],
};

// create Global Context

export const Context = createContext(initialState);

// create reducer

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	function delTransaction(id) {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	}
	function addTransaction(transactions) {
		dispatch({
			type: "ADD",
			payload: transactions,
		});
	}

	return (
		<Context.Provider
			value={{
				transactions: state.transactions,
				delTransaction,
				addTransaction,
			}}
		>
			{children}
		</Context.Provider>
	);
};
