import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toaster, Spinner } from 'evergreen-ui';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';
import { emailSchema } from '../../utili/validationschema/validationSchema';
import { getUserByEmail, orderExists } from '../../services/endpoints';

type Inputs = {
  email: string,
};

const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors, isSubmitting, isValid, isDirty,
    },
  } = useForm<Inputs>({ mode: 'onChange', resolver: yupResolver(emailSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    localStorage.setItem('email', data.email);

    orderExists(data.email)
      .then((res) => {
        setLoading(true);
        if (res?.data?.message !== 'No active sales for this user') {
          router.push('/checkout');
        } else if (res?.data?.message === 'No active sales for this user') {
          getUserByEmail(data.email)
            .then((response) => {
              if (response?.data?.message === 'User does not exist') {
                setLoading(false);
                router.push('/verify');
              } else if (res?.data?.message !== 'User does not exist') {
                setLoading(false);
                router.push('/number');
              }
            })
            .catch((err) => toaster?.danger(err));
        }
      })
      .catch((err) => toaster?.danger(err));

    reset();
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-80">
          <Spinner />
        </div>
      )
        : (
          <FormBox>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Email"
                type="email"
                placeholder="name@enyata.com"
                {...register('email', { required: true })}
                errors={errors}
              />

              <CustomButton
                disable={!isValid || !isDirty || isSubmitting}
              >
                I want some
              </CustomButton>
            </form>
          </FormBox>
        )}
    </div>
  );
};

export default EmailForm;
