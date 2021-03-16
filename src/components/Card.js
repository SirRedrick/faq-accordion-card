import React from 'react';
import styles from './Card.module.css';
import image from '../images/illustration-woman-online-mobile.svg';

export default function Card({ title, children }) {
	return (
		<div className={styles.card}>
			<img src={image} alt="" />
			<h1>{title}</h1>
			{children}
		</div>
	);
}
