import React from 'react';

import './Display.css';

export default function Display({ panels }) {
	return (
		<div className="doorsContainer">
			{[ ...Array(panels) ].map((v, i) => (
				<div
					className="door"
					style={{
						borderColor: i === 2 ? 'lime' : undefined
					}}
				/>
			))}
		</div>
	);
}
