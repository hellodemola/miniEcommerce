import React from 'react';
import Layout from '../components/common/layout';
import { completed } from '../components/Svg';

const SuccessPage = () => (
  <Layout>
    <div className="pl-14 mt-52">
      <div className="ml-40">{completed}</div>
      <p className="text-black font-medium text-2xl mt-14">Order received and shared to your mail</p>

    </div>
  </Layout>
);

export default SuccessPage;
