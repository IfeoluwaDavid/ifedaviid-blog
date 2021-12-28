import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Twirl as Hamburger } from 'hamburger-react'
import ifedaviidLogo from '../images/ifedaviid-favicon.png'
import * as styles from './navigation.module.css'
import { config } from '@fortawesome/fontawesome-svg-core'
const navigation = require('../content/navigation-list.json')

config.autoAddCss = false

const NavContainer = styled.nav`
  display: block;
  width: 100%;
  padding: 3rem;
  position: fixed;
  background: rgb(78, 76, 76);
  z-index: 2;

  @media (max-width: 768px) {
    height: ${(props) => (props.isNavOpen ? '23rem' : '9rem')};
    transition: height 0.08s;
    padding: 2rem 2.5rem;
  }
`

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <NavContainer
      role="navigation"
      aria-label="Main"
      isNavOpen={isNavOpen}
      toggleMenu={toggleMenu}
    >
      {/* <MenuIcon icon={faBars} /> */}
      <div className={styles.subcontainer}>
        <div className={styles.menuIconContainer}>
          <Hamburger
            toggled={isNavOpen}
            toggle={setIsNavOpen}
            onClick={() => toggleMenu()}
          />
        </div>

        <Link to="/" className={styles.logoLink}>
          <span />
          <img
            className={styles.logo}
            alt="ifedaviid-logo"
            src={ifedaviidLogo}
          />
          <p className={styles.blogTitle}>IFEDAVIID</p>
        </Link>
        <ul className={styles.navigation}>
          {navigation.map((navItem, idx) => {
            return (
              <li className={styles.navigationItem}>
                <Link to={navItem.slug} activeClassName="active">
                  {navItem.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {isNavOpen ? (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNav}>
            {navigation.map((navItem, idx) => {
              return (
                <li className={styles.mobileNavItem}>
                  <Link to={navItem.slug}>{navItem.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </NavContainer>
  )
}

export default Navigation
