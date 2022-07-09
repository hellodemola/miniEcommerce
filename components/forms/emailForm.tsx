import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';

const EmailForm = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Cookies.set('email', input);
    router.push('/verify');
  };

  return (
    <div>
      <FormBox>
        <form onSubmit={onSubmit}>
          <TextInput label="Email" type="email" placeholder="name@enyata.com" value={input} onChange={handleInput} />

          <CustomButton>I want some</CustomButton>
        </form>
      </FormBox>
    </div>
  );
};

export default EmailForm;
