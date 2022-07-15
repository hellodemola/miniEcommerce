import { useState, useEffect } from 'react';

const useGetUserHooks = () => {
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [number, setNumber] = useState([]);

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

  return { email, name, number };
};

export default useGetUserHooks;
