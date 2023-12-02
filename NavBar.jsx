import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Using generic icons for now
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        {/* I've added a generic logo for now from the images that we have */}
        <img src="C:\REIWeb-main\images\scheduleHouse.png" alt="logo" />
      </div>
      <div className={styles.searchAndIcons}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search..."
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch />
          </button>
        </div>
        <div className={styles.userIcon}>
          <FaUserCircle size="2em" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
