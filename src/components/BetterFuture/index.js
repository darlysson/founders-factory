import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import office from './img/people-office.png';
import styles from './style.module.css';

export default () => (
  <div className={styles.futureContainer}>
    <img src={office} alt="Office"/>
    <div className={styles.betterFutures}>
      <h1>We fund a <br />better future</h1>
      <p>
        Working on startups that impact the world for the better really matter to us. 
        In fact we're all here so that impact can happen quicker. That means funding people free from any bias and building startups that we're proud to show anyone.
      </p>
      <button>Find out more about us <MdKeyboardArrowRight /></button>
    </div>
  </div>
)

