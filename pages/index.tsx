import type { NextPage } from 'next';
import Layout from '../components/common/layout';
import EmailForm from '../components/forms/emailForm';
import Progress from '../components/progressBar/progress';

const Home: NextPage = () => (
  <Layout>
    <Progress />
    <EmailForm />
  </Layout>
);
export default Home;
