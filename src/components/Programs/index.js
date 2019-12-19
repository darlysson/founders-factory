import React from 'react';

import styles from './style.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default () => (
  <div className={styles.programContainer}>
  <h1>Our programs</h1>

  <div className={styles.sections}>
    <section>
      <h2>Studio</h2>
      <p>Partner with us to<br /> build a new startup</p>
      <button>More on our Studio Program <MdKeyboardArrowRight /></button>
    </section>
    
    <section>
      <h2>Seed</h2>
      <p>Team up with us to<br /> grow your business</p>
      <button>More on our Studio Program <MdKeyboardArrowRight /></button>
    </section>
  </div>
</div>
);
