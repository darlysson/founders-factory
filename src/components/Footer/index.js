import React from 'react';
import { Link } from 'gatsby';
import { 
  TiSocialFacebookCircular, 
  TiSocialInstagram, 
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialSkypeOutline 
} from 'react-icons/ti';

import styles from './style.module.css';

export default () => (
  <div className={styles.footerContainer}>
    <section className={styles.infos}>
      <h2>FOUNDERS <br />FACTORY<span>.</span></h2>
      <p>To keep up to date on our news, events and career opportunities, sig up to our newsletter The factory Floor here:</p>
      <form>
        <input type="text" placeholder=" Email..."/>
        <button>Send</button>
      </form>
      
      <ul>
        <li><Link to="/">Get directions</Link></li>
        <li><Link to="/">Press</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <p>© 2019 Founder Factory Ltd.All rights reserved.</p>
    </section>

    <section className={styles.address}>
      <h2>Founders Factory</h2>
      <p>Northcliffe House <br /> Young St. <br /> London, W8 5EH</p>
      <div className={styles.iconsList}>
        <ul>
          <li>
            <Link to="/">
              <TiSocialFacebookCircular />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialLinkedin />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialTwitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialPinterest />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialSkypeOutline />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </div>
)


