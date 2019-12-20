import React from 'react';

import styles from './style.module.css';
import Button from '../Helpers/Button';
import SectionTitle from '../Helpers/SectionTitle';

export default () => (
  <div className={styles.partnerContainer}>
    <section className={styles.partnerPromotion}>
      <SectionTitle title={`We promote partnerships`} color={`#000`} />
      <p>We're partnered with companies that already have huge scale, now imagine them being put to work for your start-up. we call that unfair advantage. We know how powerful finding a partnership with these business giants can be, so we're making it easier.</p>
      <Button
        to={'/partnerships'} 
        label={'Read about our partners'} 
        color={`#000`} 
        background={`#FFF`}
        width={`240px`}
        height={`50px`}
        margin={`35px 0 0 0`}
        padding={`0 0 0 7px`} 
      />
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

