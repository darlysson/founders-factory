import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import styles from './style.module.css';

export default () => (
  <div className={styles.hiringContainer}>
    <h1>We're hiring and so are our startups</h1>
    <p>We are always on the lookout for brilliant entrepreneurial people who are passionate about one of our startups or our company.</p>
    <button>Current positions <MdKeyboardArrowRight /></button>
  </div>
)
