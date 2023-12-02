import React from 'react';
import styles from './Footer.module.scss'; // Import the SCSS module
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // You might use react-icons for icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          {/* Replace with your logo */}
          <img src="path-to-your-logo.svg" alt="Fletch" />
        </div>
        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className={styles.description}>
          <p>©2022 Fletch Homes. All rights reserved</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.socialLinks}>
          {/* Add your social media links */}
          <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.instagram.com" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
