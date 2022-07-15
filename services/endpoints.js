import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NUTS_BASEURL,
});

export const getUserByEmail = async (email) => apiInstance.get(`users/get?email=${email}`);

export const orderExists = async (email) => apiInstance.get(`orders/active?email=${email}`);

export const AddUser = async (payload) => apiInstance({
  method: 'POST',
  url: 'users/add',
  data: payload,
});

export const getDeliveryDate = async () => apiInstance.get('orders/delivery-date');

export const AddOrder = async (payload) => apiInstance({
  method: 'POST',
  url: 'orders/add',
  data: payload,
});

export const updateOrder = async (payload) => apiInstance(
  {
    method: 'PATCH',
    url: 'orders/update',
    data: payload,
  },
);
