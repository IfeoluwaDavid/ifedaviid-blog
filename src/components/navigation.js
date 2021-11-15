import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ifedaviidLogo from '../images/ifedaviid-favicon.png'
import * as styles from './navigation.module.css'
import styled from 'styled-components'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const MenuIcon = styled(FontAwesomeIcon)`
  color: #fff;
  margin-left: 0.5rem;
  transform: scale(2);
  align-self: center;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <style src="@fortawesome/fontawesome-svg-core/styles.css">
      <MenuIcon icon={faBars} />
    </style>
    <Link to="/" className={styles.logoLink}>
      <span />
      <img className={styles.logo} alt="ifedaviid-logo" src={ifedaviidLogo} />
      <p className={styles.blogTitle}>IFEDAVIID</p>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Recent Posts
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
