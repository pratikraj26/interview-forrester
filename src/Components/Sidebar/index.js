import React from "react";
import { Link } from "react-router-dom";
import Accordion from "~/Components/Accordion";
import Logo from "~/assets/images/logo.png";

import './styles.css'

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="logo-container">
				<Link to="/">
					<img src={Logo} alt="app-logo" className="logo-main" />
				</Link>
			</div>
			<div className="nav-container">
				<Accordion
					initialExpanded={true}
					header={(e) => <div className="menu-item">Chart Selector</div>}
					content={(e) => (
						<ul className="submenu">
							<li>
								<Link
									className="sub-menu-item"
									to="/chart/vertical-bar-chart"
								>
									Vertical Bar Chart
								</Link>
							</li>
							<li>
								<Link
									className="sub-menu-item"
									to="/chart/donut-chart"
								>
									Donut Chart
								</Link>
							</li>
						</ul>
					)}
				/>
			</div>
		</div>
	);
}