import React from 'react';
import { Link } from 'gatsby';

import styles from './style.module.css';
import founder from './img/founder.png'
import logo from './img/founder-logo.png'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default () => (
  <div className={styles.foundersContainer}>
    <h1>Here are some of our brilliant founders</h1>
    
    <div className={styles.sections}>
      <button> <MdKeyboardArrowLeft /></button>
      <section className={styles.photo}>
        <img src={founder} alt="Founder placeholder"/>
      </section>

      <section className={styles.founderInfos}>
        <img src={logo} alt="Logo placeholder"/>
        <h1>Marie Chevrier</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis, minus reiciendis libero harum cumque?</p>
        <Link to="#">Learn more about Sampler</Link>
      </section>
      <button> <MdKeyboardArrowRight /></button>
    </div>

    <button id={styles.btn}>See our current portfolio <MdKeyboardArrowRight /></button>
  </div>
 )


      
 