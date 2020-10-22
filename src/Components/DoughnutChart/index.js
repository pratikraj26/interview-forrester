import React from "react";
import Header from "~/Components/Header";
import Graph from "~/Components/Graph";

export default function DoughnutChart() {
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
	const exportPPT = () => {
		return null;
	};
	return (
		<>
			<Header
				title="Doughnut Chart"
				actionTitle="Export PPT"
				action={exportPPT}
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
