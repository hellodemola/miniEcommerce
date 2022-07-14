import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { toaster, Spinner } from 'evergreen-ui';
import Layout from '../components/common/layout';
import Progress from '../components/progressBar/progress';
import { calenderIcon, editIcon } from '../components/Svg';
import { QueryDeliveryDate } from '../services/useQuery';
import { AddOrder } from '../services/endpoints';

const CheckoutPage = () => {
  const router = useRouter();
  const [getEmail, setEmail] = useState([]);
  const [getName, setName] = useState([]);
  const [getNumber, setNumber] = useState([]);

  const { data, isLoading } = QueryDeliveryDate();
  const date = data?.data?.data?.deliveryDate;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setEmail(JSON.parse(JSON.stringify(localStorage.getItem('email') || '')));
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setName(JSON.parse(JSON.stringify(localStorage.getItem('name') || '')));
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNumber(JSON.parse(JSON.stringify(localStorage.getItem('number') || '')));
    }
  }, []);

  /*
    does user have an [active] order?
      if yes, get the singleOrder: ( user details from the backend with get backend
       )
        customer can also edit quantity
          patch / update order

    Else fetch the order and user from the frontend/ localstorage
    // add new order
  */

  const unitPrice = 1000;
  const total = unitPrice * +getNumber;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const payload = {
      email: getEmail,
      name: getName,
      quantity: +getNumber,
    };
    AddOrder(payload)
      .then((res) => {
        if (res?.status === 201) {
          localStorage.removeItem('email');
          localStorage.removeItem('number');
          localStorage.removeItem('name');
          router.push('/success');
        }
      })
      .catch(() => {
        toaster.danger('Your have an active order for the week');
      });
  };
  return (
    <Layout>
      <Progress />
      {isLoading ? (
        <div className="flex items-center justify-center h-80">
          <Spinner />
        </div>
      )
        : (
          <div className="mt-9 ml-3">
            <div className="flex">
              {calenderIcon}
              <div className="ml-3 text-2xl font-thin mt-3">
                Delivery:
                {' '}
                <span className="font-medium text-black">
                  {moment(date).format('dddd, MMMM Do, YYYY')}
                </span>
              </div>
            </div>

            <div className="flex mt-9">
              <div className="">
                <p className="text-dark font-normal text-2xl">Email</p>
                <p className="text-4xl font-bold text-black">{getEmail}</p>
              </div>
              <div className="ml-28 cursor-pointer" onClick={() => router.push('/number')} aria-hidden="true">
                {editIcon}
              </div>

            </div>

            <div className="mt-14">
              <p className="text-dark font-normal text-2xl">Name</p>
              <p className="text-4xl font-bold text-black">{getName}</p>
            </div>

            <div className="mt-14">
              <p className="text-dark font-normal text-2xl">How many nuts?</p>
              <p className="text-4xl font-bold text-black">{getNumber}</p>
            </div>

            <div className="mt-14 flex justify-end">
              <p className="text-4xl font-bold text-black">{total}</p>
            </div>

            <div className="flex mt-5 pb-48">
              <button
                type="submit"
                className="bg-violet text-white h-15 w-77 font-normal
          text-2xl ml-6"
                onClick={onSubmit}
              >
                Pay on Delivery

              </button>

            </div>
          </div>
        )}
    </Layout>
  );
};

export default CheckoutPage;
