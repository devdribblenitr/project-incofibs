import { StylesContext } from "@material-ui/styles";
import Image from "next/image";
import React from "react";

import styles from "../styles/gallery.module.css";

const incofibs2010 = [
  {
    url: "./gallery/2010_1.jpg",
    key: 1,
  },
  {
    url: "./gallery/2010_2.jpg",
    key: 2,
  },
  {
    url: "./gallery/2010_3.jpg",
    key: 3,
  },
  {
    url: "./gallery/2010_4.jpg",
    key: 4,
  },
 
];

const incofibs2015 = [
  {
    url: "./gallery/1.jpg",
    key: 1,
  },
  {
    url: "./gallery/2.jpg",
    key: 2,
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

const nitr = [
  {
    url: "./gallery/nitr_1.jpg",
    key: 1,
  },
  {
    url: "./gallery/nitr_2.jpg",
    key: 2,
  },
  {
    url: "./gallery/nitr_3.jpg",
    key: 3,
  },
  {
    url: "./gallery/nitr_4.jpg",
    key: 4,
  },
  {
    url: "./gallery/nitr_5.jpg",
    key: 5,
  },
  {
    url: "./gallery/nitr_6.jpg",
    key: 6,
  },
];

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <section className={styles.section}>
        <h1 className="max-w-[1440px] mx-auto text-center my-2 text-4xl text-communityColor2 font-bold">InCoFIBS 2010</h1>
        <div className="w-24 h-1 bg-communityColor2 mx-auto my-3 mb-12"></div>
        <div className={styles.imageGrid}>
          {incofibs2010.map((image) => {
            return (
              <div key={image.key}>
                <img src={image.url} alt="" />
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section}>
        <h1 className="max-w-[1440px] mx-auto text-center my-2 text-4xl text-communityColor2 font-bold">InCoFIBS 2015</h1>
        <div className="w-24 h-1 bg-communityColor2 mx-auto my-3 mb-12"></div>
        <div className={styles.imageGrid}>
          {incofibs2015.map((image) => {
            return (
              <div key={image.key}>
                <img src={image.url} alt="" />
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section}>
        <h1 className="max-w-[1440px] mx-auto text-center my-2 text-4xl text-communityColor2 font-bold">NIT ROURKELA</h1>
        <div className="w-24 h-1 bg-communityColor2 mx-auto my-3 mb-12"></div>
        <div className={styles.imageGrid}>
          {nitr.map((image) => {
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
