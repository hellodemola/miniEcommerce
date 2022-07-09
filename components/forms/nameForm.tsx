import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';
import { backArrow } from '../Svg';

const NameForm = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Cookies.set('name', input);
    router.push('/number');
  };
  return (
    <FormBox>
      <form onSubmit={onSubmit}>
        <TextInput label="Can we know your name" type="text" placeholder="First (or Nick) name" value={input} onChange={handleInput} />
        <CustomButton>Continue</CustomButton>
        <div className="flex justify-center gap-x-3.5 mt-3.5 cursor-pointer" onClick={() => router.back()} aria-hidden="true">
          {backArrow}
          Back

        </div>
      </form>
    </FormBox>
  );
};

export default NameForm;
