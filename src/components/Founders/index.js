import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel'

import styles from './style.module.css';
import Button from '../Helpers/Button';
import SectionTitle from '../Helpers/SectionTitle';
import CarouselItem from '../Helpers/CarouselItem';

export default () => (

  <div className={styles.foundersContainer}>
    {/* It renders SectionTitle helper-component. */}
    <SectionTitle 
      title={`Here are some of our brilliant founders`} 
      color={`#000`} 
    />
    
    {/* It renders the CarouselComponent from "react-bootstrap" */}
    <Carousel
      interval={null} 
      indicators={false} 
      prevIcon={<MdKeyboardArrowLeft className={styles.icon}/>} 
      nextIcon={<MdKeyboardArrowRight className={styles.icon}/>}
    >
      <CarouselItem />
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




      
 