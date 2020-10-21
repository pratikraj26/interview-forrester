import React, { useEffect, useRef, useState } from 'react'
import './styles.css'

export default function Accordion(props) {
	const { initialExpanded, header, content } = props;
	const [active, setActive] = useState(initialExpanded || false);
	const [panelHeight, setPanelHeight] = useState(0)

	const contentEl = useRef(null)

	useEffect(() => {
		setPanelHeight(active ? contentEl.current.scrollHeight : 0);
	}, [active])

	const toggleAccordion = () => {
		setActive(!active)
	}

	return (
		<div className="accordion">
			<div
				className={`accordion-header ${active && "active"}`}
				onClick={toggleAccordion}
			>
				{header()}
			</div>
			<div
				ref={contentEl}
				style={{ maxHeight: `${panelHeight}px` }}
				className="accordion-content"
			>
				{content()}
			</div>
		</div>
	);
}