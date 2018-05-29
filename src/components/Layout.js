import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './Layout.scss';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header>
          <h1  as="h1" className={h1}>webpack-for-react</h1>
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>
  );
};

export default Layout;
