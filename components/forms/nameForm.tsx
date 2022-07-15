import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toaster } from 'evergreen-ui';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';
import { backArrow } from '../Svg';
import { nameSchema } from '../../utili/validationschema/validationSchema';
import { AddUser } from '../../services/endpoints';
import FormLayout from '../layouts/formLayout';

type Inputs = {
  name: string,
};

const NameForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors, isSubmitting, isValid, isDirty,
    },
  } = useForm<Inputs>({ mode: 'onChange', resolver: yupResolver(nameSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    localStorage.setItem('name', data.name);
    const userEmail = localStorage.getItem('email');

    const userDetails = {
      name: data.name,
      email: userEmail,
    };

    AddUser(userDetails)
      .then((res) => {
        if (res.status === 201) {
          router.push('/number');
        }
      })
      .catch((err) => {
        toaster?.danger(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormLayout isLoading={loading}>
      <FormBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Can we know your name"
            type="text"
            placeholder="First (or Nick) name"
            {...register('name', { required: true })}
            errors={errors}
          />
          <CustomButton disable={!isValid || !isDirty || isSubmitting}>
            Continue
          </CustomButton>
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
    </FormLayout>
  );
};

export default NameForm;
