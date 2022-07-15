import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';
import { backArrow } from '../Svg';
import { numberSchema } from '../../utili/validationschema/validationSchema';
import FormLayout from '../layouts/formLayout';

type Inputs = {
  number: number,
};

const NumberForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors, isSubmitting, isValid, isDirty,
    },
  } = useForm<Inputs>({ mode: 'onChange', resolver: yupResolver(numberSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    router.push('/checkout');
    localStorage.setItem('number', data.number.toString());
  };

  return (
    <FormLayout isLoading={isSubmitting}>
      <FormBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="How many do you want?"
            type="number"
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
    </FormLayout>
  );
};

export default NumberForm;
