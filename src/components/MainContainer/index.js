import React from 'react';
 
import styles from './style.module.css';

export default ({children}) => (
  <div className={styles.container}>
    { children }
  </div>
)

