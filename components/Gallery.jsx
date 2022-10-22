import { StylesContext } from '@material-ui/styles'
import React from 'react'

import styles from '../styles/gallery.module.css'

const Gallery = () => {
  return (
    <div className ={styles.gallery}>
      <section>
        <h1>Section 1</h1>
      </section>
      <section>
        <h1>Section 2</h1>
      </section>
    </div>
  )
}

export default Gallery