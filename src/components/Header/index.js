import React from 'react';

import styles from './style.module.css';
import { IoMdFunnel } from 'react-icons/io';

export default () => (
  <header>
    <h1>FOUNDERS <br />FACTORY<span>.</span></h1>
    <div className={styles.btns}>
      <button>Join Us</button>
      <button>Navigate <IoMdFunnel /></button>
    </div>
  </header>
);

