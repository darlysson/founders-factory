import React from 'react';

import styles from './style.module.css';
import Button from '../Helpers/Button';
import SectionTitle from '../Helpers/SectionTitle';

export default () => (
  <div className={styles.programContainer}>
  <SectionTitle title={'Our programs'} color={`#000`} />

  <div className={styles.sections}>
    <section>
      <h2>Studio</h2>
      <p>Partner with us to<br /> build a new startup</p>
      <Button
        to={'/programs'} 
        label={'More on our Studio Program'} 
        color={`#000`} 
        background={`#F1DDDD`}
        width={`282px`}
        height={`50px`}
        margin={`30px 0 45px`}
        padding={`0 0 0 5px`} 
      />
    </section>
    
    <section>
      <h2>Seed</h2>
      <p>Team up with us to<br /> grow your business</p>
      <Button
        to={'/programs'}  
        label={'More on our Studio Program'} 
        color={`#000`} 
        background={`#F1DDDD`}
        width={`282px`}
        height={`50px`}
        margin={`30px 0 45px`}
        padding={`0 0 0 5px`} 
      />
    </section>
  </div>
</div>
);
