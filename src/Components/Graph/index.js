import React, { useEffect, useRef } from 'react'
import Chart from "chart.js";

export default function Graph(props) {
	const { type, chartData, options } = props
	
	const canvasEl = useRef(null)

	useEffect(() => {
		const data = [], labels = [];
		chartData.forEach((item) => {
			data.push(item.y);
			labels.push(item.label);
		});
		const configureChart = () => {
			new Chart(canvasEl.current, {
				type: type,
				data: {
					datasets: [
						{
							data: data,
							backgroundColor: [
								"#52c0c0",
								"#f49e3f",
								"#9965f7",
								"#ee6083",
								"#3ba3eb",
							],
							label: "Dataset 1",
						},
					],
					labels: labels,
				},
				options: options,
			});
		};
		configureChart();
	}, [type, chartData, options]);

	return <canvas ref={canvasEl} />
}