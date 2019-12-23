import React from 'react';
import { Link } from 'gatsby';

import styles from './style.module.css';
import { IoMdFunnel } from 'react-icons/io';

export default () => (
  <header>
    <h1>FOUNDERS <br />FACTORY<span>.</span></h1>
    <div className={styles.btns}>
       <Link to={'/join-us'}>Join us</Link>
       <Link to={'/'}> Navigate <IoMdFunnel /> </Link> 
    </div>
  </header>
);

