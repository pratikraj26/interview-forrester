import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from '~/Components/Sidebar'
import VerticalBarChart from "~/Components/VerticalBarChart";
import DoughnutChart from "~/Components/DoughnutChart";

import './styles.css'

export default function ChartSelector() {
	return (
		<div className="main">
			<Sidebar />
			<div className="has-sidebar">
				<Switch>
					<Route
						path="/chart/vertical-bar-chart"
						component={VerticalBarChart}
					/>
					<Route
						path="/chart/donut-chart"
						component={DoughnutChart}
					/>
					<Route
						path="/chart"
						render={(e) => (
							<Redirect to="/chart/vertical-bar-chart" />
						)}
					/>
				</Switch>
			</div>
		</div>
	);
}