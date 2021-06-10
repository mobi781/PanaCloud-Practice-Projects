const Reducer = (state, action) => {
	switch (action.type) {
		// console.log('action.type :>> ', action.type);
		case "ADD":
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};
		case "DELETE":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
};
export default Reducer;
