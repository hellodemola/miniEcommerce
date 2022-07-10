import React from 'react';
import Layout from '../components/common/layout';
import NumberForm from '../components/forms/numberForm';
import Progress from '../components/progressBar/progress';

const NumberPage = () => (
  <Layout>
    <Progress />
    <NumberForm />
  </Layout>
);

export default NumberPage;
