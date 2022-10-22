import { StylesContext } from "@material-ui/styles";
import Image from "next/image";
import React from "react";

import styles from "../styles/gallery.module.css";

const sectionOneImages = [
  {
    url: "./gallery/1.jpg",
    key: 1,
  },
  {
    url: "./gallery/2.jpg",
    key: 2,
  },
  {
    url: "./gallery/3.jpg",
    key: 3,
  },
  {
    url: "./gallery/4.jpg",
    key: 4,
  },
  {
    url: "./gallery/5.jpg",
    key: 5,
  },
  {
    url: "./gallery/6.jpg",
    key: 6,
  },
];

const sectionTwoImages = [
  {
    url: "./gallery/1.jpg",
    key: 1,
  },
  {
    url: "./gallery/2.jpg",
    key: 2,
  },
  {
    url: "./gallery/3.jpg",
    key: 3,
  },
  {
    url: "./gallery/4.jpg",
    key: 4,
  },
  {
    url: "./gallery/5.jpg",
    key: 5,
  },
  {
    url: "./gallery/6.jpg",
    key: 6,
  },
];

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <section className={styles.section}>
        <h1>InCoFIBS 2010</h1>
        <div className={styles.imageGrid}>
          {sectionOneImages.map((image) => {
            return (
              <div key={image.key}>
                <img src={image.url} alt="" />
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section}>
        <h1>InCoFIBS 2015</h1>
        <div className={styles.imageGrid}>
          {sectionTwoImages.map((image) => {
            return (
              <div key={image.key}>
                <img src={image.url} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
