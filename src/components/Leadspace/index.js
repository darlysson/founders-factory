import React from 'react';

import styles from './style.module.css';
import { GiStrong, GiArrowhead } from 'react-icons/gi';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default () => (
  <div className={styles.leadspaceContainer}>
    <h1>
      Power to <GiStrong /><br />
      <GiArrowhead /> founders
    </h1>
    <h2>We run programs to power the growth <br />of startups we invest in.</h2>
    <button>Work with us <MdKeyboardArrowRight /></button>
  </div>
);
