import React from 'react';

export default function FaqList({ data }) {
	return (
		<ul>
			{data.map((entry) => (
				<li>
					<h2>{entry.question}</h2>
					<p>{entry.answer}</p>
				</li>
			))}
		</ul>
	);
}
