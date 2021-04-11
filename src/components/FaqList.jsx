import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FaqList.module.css';
import arrowDown from '../images/icon-arrow-down.svg';

const FaqList = ({ data }) => {
  const [openedIndex, setOpenedIndex] = useState(null);

  const open = (index) => {
    if (openedIndex === index) {
      return setOpenedIndex(null);
    }
    return setOpenedIndex(index);
  };

  return (
    <ul className={styles.list}>
      {data.map((entry, index) => {
        const isOpened = openedIndex === index;
        return (
          <li key={entry.id}>
            <div className={styles.item_header}>
              <h2>
                <button
                  type="button"
                  className={isOpened ? styles.active : null}
                  onClick={() => open(index)}
                >
                  {entry.question}
                </button>
              </h2>
              <img className={isOpened ? styles.opened : null} src={arrowDown} alt="" />
            </div>

            {isOpened && <p>{entry.answer}</p>}
          </li>
        );
      })}
    </ul>
  );
};

FaqList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default FaqList;
