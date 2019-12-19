import React from 'react';

import styles from './style.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default () => (
  <div className={styles.cardsContainer}>
    <div className={styles.cards}>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel and Media</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel and Media</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel and Media</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel and Media</p>
      </section>
    </div>
    <section className={styles.knowUs}>
      <h1>Get to know us <br />better</h1>
      <button>Meet our team <MdKeyboardArrowRight /></button>
    </section>
  </div>
);