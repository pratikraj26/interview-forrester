import React from 'react'
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import ChartSelector from "~/Views/ChartSelector"

import store from '~/redux/store'

import "./App.css"

export default function App() {
	return (
		<Provider store={store} >
			<BrowserRouter>
				<Switch>
					<Route path="/chart" component={ChartSelector} />
					<Route path="/*" render={(e) => <Redirect to="/chart" />} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}