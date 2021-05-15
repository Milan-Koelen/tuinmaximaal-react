import React from 'react';

import './Display.css';

export default function Display({ doors }) {
	return (
		<div className="doorsContainer">
			{[ ...Array(doors) ].map((v, i) => (
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
