import React from 'react'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import * as styles from './layout.module.css'
import './variables.css'
import './global.css'

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
