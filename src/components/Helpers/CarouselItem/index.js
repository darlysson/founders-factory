import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'gatsby';

import logo from './img/founder-logo.png';
import founder from './img/founder.png';
import styles from './style.module.css';

const CarouselItem = (props) => (
  <>
    <Carousel.Item className={styles.founderContainer}>
      <img className={styles.founderAvatar} src={founder} alt="First slide"/>
      
      <div className={styles.founderInfos}>
        <img src={logo} alt="Logo placeholder"/>
        <h1>Marie Chevrier</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis, minus reiciendis libero harum cumque?</p>
        <Link to="/">Learn more about Sampler</Link>
      </div>
    </Carousel.Item>
  </>
)

export default CarouselItem;