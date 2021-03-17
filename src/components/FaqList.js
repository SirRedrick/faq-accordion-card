import React, { useState } from 'react';
import styles from './FaqList.module.css';
import arrowDown from '../images/icon-arrow-down.svg';

export default function FaqList({ data }) {
	const [opened, setOpened] = useState(null);

	const open = (index) => {
		if (opened === index) return setOpened(null);
		setOpened(index);
	};

	return (
		<ul className={styles.list}>
			{data.map((entry, index) => (
				<li key={index}>
					<div className={styles.item_header}>
						<h2 onClick={() => open(index)} className={opened === index ? styles.active : null}>
							{entry.question}
						</h2>
						<img className={opened === index ? styles.opened : null} src={arrowDown} alt="" />
					</div>

					{opened === index ? <p>{entry.answer}</p> : null}
				</li>
			))}
		</ul>
	);
}
