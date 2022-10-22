import { StylesContext } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import styles from '../styles/gallery.module.css'

const images = [
  {
    name:'IMAGE',
    desc: 'Image'
  }
]

const Gallery = () => {
  return (
    <div className ={styles.gallery}>
          <h1>Section 1</h1>
      <section className={styles.section} >
    
       
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        
      </section>
      <h1>Section 2</h1>
      <section className={styles.section}>
       
     
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
        <div>
          <img src="./IMAGE.png" alt="Alternate text" />
        </div>
      </section>
    </div>
  )
}

export default Gallery