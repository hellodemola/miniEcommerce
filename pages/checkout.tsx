import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/common/layout';
import Progress from '../components/progressBar/progress';
import { calenderIcon, editIcon } from '../components/Svg';

const CheckoutPage = () => {
  const router = useRouter();
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Cookies.set('email', input);
    router.push('/success');
  };
  return (
    <Layout>
      <Progress />
      <div className="mt-9 ml-3">
        <div className="flex">
          {calenderIcon}
          <div className="ml-3 text-2xl font-thin mt-3">
            Delivery:
            {' '}
            <span className="font-medium text-black">
              Tuesday, 23, 2020
            </span>
          </div>
        </div>

        <div className="flex mt-9">
          <div className="">
            <p className="text-dark font-normal text-2xl">Email</p>
            <p className="text-4xl font-bold text-black">someone@enyata.com</p>
          </div>
          <div className="ml-28">
            {editIcon}

          </div>

        </div>

        <div className="mt-14">
          <p className="text-dark font-normal text-2xl">Name</p>
          <p className="text-4xl font-bold text-black">someone</p>
        </div>

        <div className="mt-14">
          <p className="text-dark font-normal text-2xl">How many nuts?</p>
          <p className="text-4xl font-bold text-black">2</p>
        </div>

        <div className="mt-14 flex justify-end">
          <p className="text-4xl font-bold text-black">2000</p>
        </div>

        <div className="flex mt-5 pb-48">
          <button type="submit" className=" border border-violet border-solid text-violet h-15 w-77 font-normal text-2xl">Pay on Delivery</button>
          <button type="submit" className="bg-violet text-white h-15 w-77 font-normal text-2xl ml-6" onClick={onSubmit}>Pay Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
