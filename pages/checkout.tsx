import React from 'react';

import Layout from '../components/common/layout';
import Progress from '../components/progressBar/progress';
import CheckoutContainer from '../components/checkoutContainer';

const CheckoutPage = () => (
  <Layout>
    <Progress />
    <CheckoutContainer />
  </Layout>
);

export default CheckoutPage;
