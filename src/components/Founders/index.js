import React from 'react';
import { Link } from 'gatsby';
import Carousel from 'react-bootstrap/Carousel'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import styles from './style.module.css';
import founder from './img/founder.png'
import logo from './img/founder-logo.png'

export default () => (

  <div className={styles.foundersContainer}>
    <h1>Here are some of our brilliant founders</h1>
    <Carousel 
      interval={null} 
      indicators={false} 
      prevIcon={<MdKeyboardArrowLeft className={styles.icon}/>} 
      nextIcon={<MdKeyboardArrowRight className={styles.icon}/>}
    >
      <Carousel.Item>
        <img className={styles.founderAvatar} src={founder} alt="First slide"/>
        
        <div className={styles.founderInfos}>
          <img src={logo} alt="Logo placeholder"/>
          <h1>Marie Chevrier</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis, minus reiciendis libero harum cumque?</p>
          <Link to="#">Learn more about Sampler</Link>
       </div>
     </Carousel.Item>
     <Carousel.Item>
        <img className={styles.founderAvatar} src={founder} alt="First slide"/>
        
        <div className={styles.founderInfos}>
          <img src={logo} alt="Logo placeholder"/>
          <h1>Marie Chevrier</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis, minus reiciendis libero harum cumque?</p>
          <Link to="#">Learn more about Sampler</Link>
       </div>
     </Carousel.Item>
    </Carousel>
    <button>See our current portfolio <MdKeyboardArrowRight /></button>
  </div>
)


      
 