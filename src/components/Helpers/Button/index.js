import React from 'react';
import { Link } from 'gatsby';

import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './style.module.css';

// Button Component receives color, background, borderColor, width, height, margin & padding via props.
// ** This is set to work with RIGHT ARROW ICON ONLY. **

/* 
  import Button from '../Helpers/Button';

  <Button 
    to={'/'}
    label={''} 
    color={``} 
    background={``}
    width={``}
    height={``}
    margin={``}
    padding={``} 
  />
*/
const Button = (props) => 
  <Link 
    to={props.to} 
    style={{
      color: props.color, 
      borderColor: props.color,
      background: props.background,
      width: props.width,
      height: props.height,
      margin: props.margin,
      padding: props.padding,
    }} 
    className={styles.button}> {props.label} <MdKeyboardArrowRight /> 
  </Link>;

export default Button;
