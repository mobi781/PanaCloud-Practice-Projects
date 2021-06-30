import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../Api'
import { Line, Bar } from 'react-chartjs-2'


const Chart = () => {
    const [dailyData,setDailyData] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const fetchApi = async () => {
            const globalData2 = await fetchDailyData();
            setDailyData(globalData2);
            setLoading(false)
        }
        fetchApi();
        console.log('dailyData :>> ',dailyData )

    }, []);
    // const barChart = (
//     confirmed ? (
//       <Bar
//         data={{
//           labels: ['Infected', 'Recovered', 'Deaths'],
//           datasets: [
//             {
//               label: 'People',
//               backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//               data: [confirmed.value, recovered.value, deaths.value],
//             },
//           ],
//         }}
//         options={{
//           legend: { display: false },
//           title: { display: true, text: `Current state in ${country}` },
//         }}
//       />
//     ) : null
//   );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

    return (
        <div>
            <h1>show chart</h1>
        </div>
    )
}

export default Chart
