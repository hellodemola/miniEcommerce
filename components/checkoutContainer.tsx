import React, { useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { toaster, Spinner } from 'evergreen-ui';
import { QueryDeliveryDate } from '../services/useQuery';
import { calenderIcon, editIcon } from './Svg';
import { AddOrder, updateOrder } from '../services/endpoints';
import useGetUserHooks from '../hooks/useGetUserHooks';

const CheckoutContainer = () => {
  const router = useRouter();
  const { email, name, number } = useGetUserHooks();
  const [quantityValue, setQuantityValue] = useState('');
  const [style, setStyle] = useState({
    border: 'none',
  });

  const { data, isLoading } = QueryDeliveryDate();
  const date = data?.data?.data?.deliveryDate;

  const changeStyle = () => {
    setStyle({ border: '1px solid #4F46E5' });
  };

  const handleUpdateChange = (e: React.FormEvent<HTMLInputElement>) : void => {
    setQuantityValue(e.currentTarget.value);
  };

  const saveUpdateQuantity = (e: React.FormEvent<HTMLInputElement>) : void => {
    setQuantityValue(e.currentTarget.value);
  };

  const unitPrice = 1000;
  const total = unitPrice * +number;
  const newTotal = unitPrice * +quantityValue;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const payload = {
      email,
      name,
      quantity: number,
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

  const UpdateOrderQuantity = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const payload = {
      email,
      name,
      quantity: quantityValue,
    };
    updateOrder(payload)
      .then((res) => {
        if (res.status === 200) {
          router.push('/success');
        }
      })
      .catch(() => {
        toaster.danger('Enter a valid quantity');
      });
  };
  return (
    <div>
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

            <div className="mt-9">
              <p className="text-dark font-normal text-2xl">Email</p>
              <p className="text-4xl font-bold text-black">{email}</p>

            </div>

            <div className="mt-14">
              <p className="text-dark font-normal text-2xl">Name</p>
              <p className="text-4xl font-bold text-black">{name}</p>
            </div>

            <div className="mt-14 flex justify-between">
              <div className="">
                <p className="text-dark font-normal text-2xl">How many nuts?</p>
                <div style={style}>
                  <input min="1" className="text-4xl font-bold text-black outline-none" onChange={handleUpdateChange} onMouseUp={saveUpdateQuantity} type="number" defaultValue={number} />
                </div>
              </div>

              <div className="ml-28 cursor-pointer" aria-hidden="true" onClick={changeStyle}>
                {editIcon}
              </div>
            </div>

            <div className="mt-14 flex justify-end">
              <p className="text-4xl font-bold text-black">{quantityValue ? newTotal : total}</p>
            </div>

            <div className="flex mt-5 pb-48">
              {quantityValue ? (
                <button
                  type="submit"
                  className="bg-violet text-white h-15 w-77 font-normal
        text-2xl ml-6"
                  onClick={UpdateOrderQuantity}
                >
                  Update Order

                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-violet text-white h-15 w-77 font-normal
        text-2xl ml-6"
                  onClick={onSubmit}
                >
                  Pay on Delivery

                </button>
              )}

            </div>
          </div>
        )}
    </div>
  );
};

export default CheckoutContainer;
