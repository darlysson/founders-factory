import React from 'react';

import styles from './style.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default () => (
  <div className={styles.partnerContainer}>
    <section className={styles.partnerPromotion}>
      <h1>We promote <br />partnerships</h1>
      <p>We're partnered with companies that already have huge scale, now imagine them being put to work for your start-up. we call that unfair advantage. We know how powerful finding a partnership with these business giants can be, so we're making it easier.</p>
      <button>Read about our partner<MdKeyboardArrowRight /></button>
    </section>

    <section className={styles.logos}>
      <span>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
      </span>
      <span>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
      </span>
      <span>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
        <img src="https://via.placeholder.com/100" alt="placeholder"/>
      </span>
    </section>
  </div>
)

