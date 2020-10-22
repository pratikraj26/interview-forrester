import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "~/Components/Header";
import Graph from "~/Components/Graph";
import ExportGraphPPT from "~/Components/ExportGraphPPT";

import { fetchFruitsAnalytics } from "~/redux/actions/fruitsAnalytics";

function VerticalBarChart() {
	const dispatch = useDispatch()
	
	const fruitsAnalytics = useSelector((state) => state.fruitsAnalytics);
	
	const [chartData, setChartData] = useState(fruitsAnalytics.data);
	
	useEffect(() => {
		if (chartData.length === 0) {
			dispatch(fetchFruitsAnalytics())
		}
	}, []);

	useEffect(() => {
		setChartData(fruitsAnalytics.data);
	}, [fruitsAnalytics]);

	if (fruitsAnalytics.fetching) {
		return <div className="loader-container primary loader"></div>;
	}

	return (
		<>
			<Header
				title="Vertical Bar Chart"
				actionTitle="Export PPT"
				action={
					<ExportGraphPPT
						type="bar"
						chartData={chartData}
						chartTitle="Fruits"
						actionTitle="Export PPT"
					/>
				}
			/>
			<div className="content">
				<div className="padding30 card">
					<Graph
						type="bar"
						chartData={chartData}
						options={{
							responsive: true,
							legend: {
								display: false,
							},
							title: {
								display: true,
								text: "Fruits",
							},
							animation: {
								animateScale: true,
								animateRotate: true,
							},
							scales: {
								yAxes: [
									{
										display: true,
										ticks: {
											suggestedMin: 0,
											max: 50,
										},
									},
								],
							},
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default VerticalBarChart;