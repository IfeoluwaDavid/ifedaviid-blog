import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import * as styles from './layout.module.css'

export const Template = ({ children }) => {
  return (
    <div>
      <Seo />
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Template
