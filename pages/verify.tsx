import React from 'react';
import Layout from '../components/common/layout';
import NameForm from '../components/forms/nameForm';
import Progress from '../components/progressBar/progress';

const VerifyPage = () => (
  <Layout>
    <Progress />
    <NameForm />
  </Layout>
);

export default VerifyPage;
