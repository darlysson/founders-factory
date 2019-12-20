import React from 'react';
import Button from '../Helpers/Button';
import SectionTitle from '../Helpers/SectionTitle';

import office from './img/people-office.png';
import styles from './style.module.css';

export default () => (
  <div className={styles.futureContainer}>
    <img src={office} alt="Office"/>
    <div className={styles.betterFutures}>
      <SectionTitle title={`We fund a better future`} color={`#000`}/>
      <p>
        Working on startups that impact the world for the better really matter to us. 
        In fact we're all here so that impact can happen quicker. That means funding people free from any bias and building startups that we're proud to show anyone.
      </p>
      <Button
        to={'/better-futures'} 
        label={'Find out more about us'} 
        color={`#000`} 
        background={`#F4F4F4`}
        width={`235px`}
        height={`50px`}
        margin={`35px 0px 0px 0`}
        padding={`0 0 0 7px`} 
      />
    </div>
  </div>
)

