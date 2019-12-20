import React from 'react';

import styles from './style.module.css';
import Button from '../Helpers/Button';

export default () => (
  <div className={styles.cardsContainer}>
    <div className={styles.cards}>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel & Media</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel & Media</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel & Media</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
        <h3>Cat Jones</h3>
        <p>Travel & Media</p>
      </section>
    </div>
    <section className={styles.knowUs}>
      <h1>Get to know us <br />better</h1>
      <Button
        to={'/teams'} 
        label={'Meet our team'} 
        color={`#FFF`} 
        background={`#18342F`}
        width={`200px`}
        height={`50px`}
        margin={`12px 57px 75px -55px`}
        padding={`0 0 0 5px`} 
      />
    </section>
  </div>
);