import React from 'react';
import { Link } from 'gatsby';
import Button from '../Helpers/Button';
import styles from './style.module.css';
import founder from './img/founder.png';
import logo from './img/founder-logo.png';
import Carousel from 'react-bootstrap/Carousel'
import SectionTitle from '../Helpers/SectionTitle';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default () => (

  <div className={styles.foundersContainer}>
    {/* It renders SectionTitle helper-component. */}
    <SectionTitle 
      title={`Here are some of our brilliant founders`} 
      color={`#000`} 
    />
    
    <Carousel
      interval={null} 
      indicators={false} 
      prevIcon={<MdKeyboardArrowLeft style={{opacity: 1}} className={styles.icon}/>} 
      nextIcon={<MdKeyboardArrowRight className={styles.icon}/>}
    >
      <Carousel.Item className={styles.founderContainer}>
        <img className={styles.founderAvatar} src={founder} alt="First slide"/>
        
        <div className={styles.founderInfos}>
          <img src={logo} alt="Logo placeholder"/>
          <h1>Marie Chevrier</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis, minus reiciendis libero harum cumque?</p>
          <Link to="/">Learn more about Sampler</Link>
        </div>
      </Carousel.Item>
      <Carousel.Item className={styles.founderContainer}>
        <img className={styles.founderAvatar} src={founder} alt="First slide"/>
        
        <div className={styles.founderInfos}>
          <img src={logo} alt="Logo placeholder"/>
          <h1>Marie Chevrier</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis, minus reiciendis libero harum cumque?</p>
          <Link to="/">Learn more about Sampler</Link>
        </div>
      </Carousel.Item>
    </Carousel>
    
    {/* It renders Button helper-component. */}
    <Button
      to={'/founders'} 
      label={'See our current portfolio'} 
      color={`#000`} 
      background={`#FFF`}
      width={`235px`}
      height={`50px`}
      margin={`55px 0px 0px 0`}
      padding={`0 0 0 7px`} 
    />
  </div>
)




      
 