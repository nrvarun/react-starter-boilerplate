import React from 'react';

import styles from './footer.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>Made with
        <span role="img" aria-label="heart">💖</span>
         by Varun
        <span role="img" aria-label="folded hands">🙏</span>.
      </p>
    </footer>
  );
};

export default Footer;
