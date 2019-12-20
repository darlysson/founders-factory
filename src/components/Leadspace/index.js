import React from 'react';

import styles from './style.module.css';

import strong from './img/strong-arm.png'
import arrow from './img/arrow.png'
import Button from '../Helpers/Button';

export default () => (
  <div className={styles.leadspaceContainer}>
    <h1>
      <span>Power to <img src={strong} className={styles.arm} alt="arm"/></span> 
      <img src={arrow} className={styles.arrow} alt="Arrow"/> founders
    </h1>
    <h2>We run programs to power the growth <br />of startups we invest in.</h2>
    <Button 
      to={'/jobs'}
      label={'Work with us'} 
      color={`#000`} 
      background={`#FFF`}
      width={`200px`}
      height={`50px`}
      margin={`30px 0 45px`}
      padding={`0 0 0 5px`} 
    />
  </div>
);
