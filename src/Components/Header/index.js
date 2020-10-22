import React from "react";
import './styles.css'

export default function Header(props) {
	const { title, action } = props;
	return (
		<div className="header card">
			<div className="title-container">
				<h1 className="medium">{title}</h1>
			</div>
			{action && <div className="action-container">{action}</div>}
		</div>
	);
}