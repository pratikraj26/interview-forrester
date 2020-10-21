import React from "react";
import Header from "~/Components/Header";

export default function DonutChart() {
	const exportPPT = () => {
		return null
	}
	return (
		<>
			<Header
				title="Donut Chart"
				action={exportPPT}
				actionTitle="Export PPT"
			/>
			<h2 className="light">Donut Chart</h2>
		</>
	);
}