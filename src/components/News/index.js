import React from 'react';
import Button from '../Helpers/Button';
import SectionTitle from '../Helpers/SectionTitle';

import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import styles from './style.module.css';

export default () => (
  <div className={styles.newsContainer}>
    <SectionTitle title={`What we've been up to`} color={`#000`}/>

    <div id={styles.sections}>
      <section className={styles.card1}>
        <img src={card1} alt="Placeholder"/>
        <p><span>Ideas</span> — 3 days ago</p>
        <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
      </section>

      <hr className={styles.hrNews}/>

      <section className={styles.card2}>
        <img src={card2} alt="Placeholder"/>
        <p><span>Funding</span> — 3 days ago</p>
        <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
      </section>

      <hr className={styles.hrNews}/>

      <section className={styles.card3}>
        <img src={card3} alt="Placeholder"/>
        <p><span>Talent</span> — 3 days ago</p>
        <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
      </section>
    </div>
    
    <Button
      to={'/news'} 
      label={'More news & updates'} 
      color={`#000`} 
      background={`#FFF`}
      width={`235px`}
      height={`50px`}
      margin={`55px 0px 0px 0`}
      padding={`0 0 0 7px`} 
    />
  </div>
)

