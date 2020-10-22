import React from "react";
import Header from "~/Components/Header";
import Graph from "~/Components/Graph";
import ExportGraphPPT from "~/Components/ExportGraphPPT";

export default function VerticalBarChart() {
	const chartData = [
		{
			label: "Apple",
			y: 10,
		},
		{
			label: "Orange",
			y: 15,
		},
		{
			label: "Banana",
			y: 25,
		},
		{
			label: "Grape",
			y: 30,
		},
		{
			label: "Mango",
			y: 28,
		},
	]
	
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
