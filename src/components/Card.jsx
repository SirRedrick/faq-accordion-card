import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import mobileImage from '../images/illustration-woman-online-mobile.svg';
import desktopImage from '../images/illustration-box-desktop.svg';

const Card = ({ title, children }) => (
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;
