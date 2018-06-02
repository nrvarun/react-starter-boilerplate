import React from 'react';

import Header from './common/header/index';
import Footer from './common/footer';

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
