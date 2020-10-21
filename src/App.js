import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import ChartSelector from "~/Views/ChartSelector"
import "./App.css"

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/chart" component={ChartSelector} />
				<Route path="/*" render={(e) => <Redirect to="/chart" />} />
			</Switch>
		</BrowserRouter>
	);
}