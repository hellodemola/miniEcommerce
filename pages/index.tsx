import type { NextPage } from 'next';
import CustomButton from '../components/common/button';
import FormBox from '../components/common/formBox';
import TextInput from '../components/common/input';
import Layout from '../components/common/layout';
// import getCurrentTime from '../utili/time';

const Home: NextPage = () => (
  // const date = new Date();
  // const { hour, minutes, seconds } = getCurrentTime(date);

  // <div className="grid content-center h-screen border">
  //   <div className="flex justify-center text-center">
  //     <div>
  //       <p className="underline leading-normal">Project Setup</p>
  //       <h1 className="text-5xl font-bold leading-relaxed">hello world</h1>
  //       <h2 className="text-3xl font-light leading-normal">
  //         The time is
  //         {' '}
  //         {`${hour}:${minutes}:${seconds}`}
  //         {' '}
  //       </h2>
  //     </div>
  //   </div>
  // </div>
  <Layout>
    <FormBox>
      <TextInput label="Email" type="email" placeholder="name@enyata.com" />
      <CustomButton>I want some</CustomButton>
    </FormBox>

  </Layout>
);
export default Home;
