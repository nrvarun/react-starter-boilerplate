import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <section>
        <p>Hey World of React and Webpack!</p>
        <p>
          <Link to="/about">Navigate to Dynamic Page</Link>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
