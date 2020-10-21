import React from "react";
import { Link } from "react-router-dom";
import Accordion from "~/Components/Accordion";
import Logo from "~/assets/images/logo.png";

import './styles.css'

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="logo-container">
				<img src={Logo} alt="app-logo" className="logo-main" />
			</div>
			<Accordion
				initialExpanded={true}
				header={(e) => <h2>Chart Selector</h2>}
				content={(e) => (
					<ul className="nav-container">
						<li>
							<Link to="/chart/vertical-bar-chart">
								Vertical Bar Chart
							</Link>
						</li>
						<li>
							<Link to="/chart/donut-chart">Donut Chart</Link>
						</li>
					</ul>
				)}
			/>
		</div>
	);
}