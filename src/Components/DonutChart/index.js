import React from "react";
import Header from "~/Components/Header";
import Graph from "~/Components/Graph";
import ExportGraphPPT from "~/Components/ExportGraphPPT";

export default function DonutChart() {
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
	];

	return (
		<>
			<Header
				title="Doughnut Chart"
				actionTitle="Export PPT"
				action={
					<ExportGraphPPT
						type="doughnut"
						chartData={chartData}
						chartTitle="Fruits"
						actionTitle="Export PPT"
					/>
				}
			/>
			<div className="content">
				<div className="padding30 card">
					<Graph
						type="doughnut"
						chartData={chartData}
						options={{
							responsive: true,
							legend: {
								position: "top",
							},
							title: {
								display: true,
								text: "Fruits",
							},
							animation: {
								animateScale: true,
								animateRotate: true,
							},
						}}
					/>
				</div>
			</div>
		</>
	);
}
