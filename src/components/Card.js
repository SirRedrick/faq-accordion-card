import React from 'react';
import styles from './Card.module.css';
import mobileImage from '../images/illustration-woman-online-mobile.svg';
import desktopImage from '../images/illustration-box-desktop.svg';

export default function Card({ title, children }) {
	return (
		<div className={styles.card}>
			<div className={styles.image_container}>
				<img className={styles.mobile_image} src={mobileImage} alt="" />
				<img className={styles.desktop_image} src={desktopImage} alt="" />
			</div>
			<div className={styles.content}>
				<h1>{title}</h1>
				{children}
			</div>
		</div>
	);
}
