import React from 'react';
import Button from '../Helpers/Button';
import SectionTitle from '../Helpers/SectionTitle';
import styles from './style.module.css';

export default () => (
  <div className={styles.hiringContainer}>
    <SectionTitle title={`We're hiring and so are our startups`} color={`#000`} />
    <p>We are always on the lookout for brilliant entrepreneurial people who are passionate about one of our startups or our company.</p>
    <Button
      to={'/hiring'} 
      label={'Current positions'} 
      color={`#000`} 
      background={`#E2E4C1`}
      width={`235px`}
      height={`50px`}
      margin={`55px 0px 0px 0`}
      padding={`0 0 0 7px`} 
    />
  </div>
)
