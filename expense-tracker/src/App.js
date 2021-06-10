import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import DetailsOfUsage from "./Components/DetailsOfUsage";
import { History } from "./Components/History";
import AddNew from "./Components/AddNew";
import { GlobalProvider } from "./Global/ContextApi";

function App() {
	return (
		<GlobalProvider className="app">
			<Header />
			<div className="container">
				<Balance />
				<DetailsOfUsage />
				<History />
				<AddNew />
			</div>
		</GlobalProvider>
	);
}

export default App;
