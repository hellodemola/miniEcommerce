import { useState, useEffect } from 'react';

const useGetUserHooks = () => {
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);

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

  return { email, name };
};

export default useGetUserHooks;
