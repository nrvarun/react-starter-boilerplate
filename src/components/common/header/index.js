import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <h2>React Webpack</h2>
      </Link>
    </header>
  );
};

export default Header;
