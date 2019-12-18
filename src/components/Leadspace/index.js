import React from 'react';

import styles from './style.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

import strong from './img/strong.png'
import arrow from './img/arrow.png'

export default () => (
  <div className={styles.leadspaceContainer}>
    <h1>
      <span>Power to <img src={strong} className={styles.arm} alt="arm"/></span> 
      <img src={arrow} className={styles.arrow} alt="Arrow"/> founders
    </h1>
    <h2>We run programs to power the growth <br />of startups we invest in.</h2>
    <button>Work with us <MdKeyboardArrowRight /></button>
  </div>
);
