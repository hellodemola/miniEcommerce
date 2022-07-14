import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner, toaster } from 'evergreen-ui';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';
import { backArrow } from '../Svg';
import { updateOrder } from '../../services/endpoints';
import { numberSchema } from '../../utili/validationschema/validationSchema';

type Inputs = {
  // number: number,
  number: string,
};

const NumberForm = () => {
  const [loading, setLoading] = useState(false);
  const [getEmail, setEmail] = useState([]);
  const [getName, setName] = useState([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors, isSubmitting, isValid, isDirty,
    },
  } = useForm<Inputs>({ mode: 'onChange', resolver: yupResolver(numberSchema) });

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);

    const payload = {
      email: getEmail,
      name: getName,
      quantity: data.number,

    };
    updateOrder(payload)
      .then((res) => {
        if (res.status === 200) {
          router.push('/checkout');
        }
      })
      .catch(() => {
        toaster.danger('Enter a valid quantity');
      });
    localStorage.setItem('number', data.number);
    // const userEmail = localStorage.getItem('email');
    reset();
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-80">
          <Spinner />
        </div>
      ) : (
        <FormBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="How many do you want?"
              type="text"
              placeholder="Eg. 2"
              {...register('number', { required: true })}
              errors={errors}
            />
            <CustomButton disable={!isValid || !isDirty || isSubmitting}>Continue</CustomButton>
            <div
              className="flex justify-center gap-x-3.5 mt-3.5 cursor-pointer"
              onClick={() => router.back()}
              aria-hidden="true"
            >
              {backArrow}
              Back
            </div>
          </form>
        </FormBox>
      )}
    </div>
  );
};

export default NumberForm;
