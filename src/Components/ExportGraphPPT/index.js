import React, { useState } from 'react'
import pptxgen from "pptxgenjs";

export default function ExportGraphPPT(props) {
	const [processing, setProcessing] = useState(false)
	const { type, chartData, chartTitle, actionTitle } = props

	const exportPPT = () => {
		setProcessing(true)
		const data = [],
			labels = [];
		chartData.forEach((item) => {
			data.push(item.y);
			labels.push(item.label);
		});

		let pres = new pptxgen();
		let slide = pres.addSlide();
		let textboxText = chartTitle;
		let textboxOpts = {
			x: 0,
			y: 0.5,
			fontSize: 18,
			w: "100%",
			color: "363636",
			align: pres.AlignH.center,
		};
		slide.addText(textboxText, textboxOpts);
		let pptChartData = [
			{
				name: chartTitle || "",
				labels: labels,
				values: data,
			},
		];

		slide.addChart(pres.ChartType[type], pptChartData, {
			x: 1,
			y: 1,
			w: "80%",
			h: "75%",
			align: pres.AlignH.center,
			chartColors: ["52c0c0", "f49e3f", "9965f7", "ee6083", "3ba3eb"],
		});
		pres.writeFile(`${chartTitle}.pptx`);
		setProcessing(false);
	}
	return (
		<button
			className={`button-primary ${processing && 'loader'}`}
			disabled={processing}
			onClick={exportPPT}
		>
			{!processing && actionTitle}
		</button>
	);
}