import "./App.css";
import Chart from "./components/Chart";
import CountrySelect from "./components/CountrySelect";
import React, { useState, useEffect } from "react";
import SimpleCard from "./components/Cards";

import { fetchLastUpdate } from "./Api";

function App() {
	const [lastUpdate, setLastUpdate] = useState({});

	useEffect(() => {
		const fetchApi = async () => {
			const response = await fetchLastUpdate();
			setLastUpdate(response);
		};
		console.log("lastUpdate :>> ", lastUpdate);
		fetchApi();
	}, []);

	return (
		<div className="App">
			{}
			<h1>Covid-!9</h1>
			<p>
				Last Updated On:{" "}
				<span style={{ color: "red" }}>
					{new Date(lastUpdate.lastUpdate).toDateString()}
				</span>{" "}
			</p>
			<SimpleCard />
			<CountrySelect />
			<Chart />
		</div>
	);
}

export default App;
