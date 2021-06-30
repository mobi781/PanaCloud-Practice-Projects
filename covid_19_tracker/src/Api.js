import axios from "axios";
export const fetchGlobalData = async () => {
	try {
		const url = "https://covid19.mathdro.id/api";
		const {
			data: { confirmed, deaths, recovered, lastUpdate },
		} = await axios.get(url);
		return { confirmed, deaths, recovered, lastUpdate };
	} catch (error) {
		console.log(error);
	}
};
export const fetchLastUpdate = async () => {
	try {
		const url = "https://covid19.mathdro.id/api";
		const {
			data: { lastUpdate },
		} = await axios.get(url);
		return { lastUpdate };
	} catch (error) {
		console.log(error);
	}
};
export const fetchDailyData = async () => {
	try {
		const url = "https://covid19.mathdro.id/api/daily";
		const dailyData = await axios.get(url);
		return dailyData;
	} catch (error) {
		console.log(error);
	}
};
