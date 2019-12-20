import React from 'react';

import styles from './style.module.css';
import SectionTitle from '../Helpers/SectionTitle';

export default () => (
  <div className={styles.teamContainer}>
    <section className={styles.section1}>
      <SectionTitle title={`We're a team`} color={`#FFF`} />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </section>

    <hr className={styles.hrTeam}/>

    <section className={styles.section2}>
      <SectionTitle title={`We tailor our support`} color={`#FFF`} />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </section>
  </div>
);
