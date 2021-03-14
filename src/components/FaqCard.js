import React from 'react';

export default function FaqCard({ title, body }) {
	return (
		<>
			<h1>{title}</h1>
			<ul>
				{body.map((node) => (
					<li>
						<h2>{node.question}</h2>
						<p>{node.answer}</p>
					</li>
				))}
			</ul>
		</>
	);
}
