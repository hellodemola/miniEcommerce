import React, { forwardRef } from 'react';

type Props = {
  label: string;
  type: string;
  placeholder: string;
  onChange: any;
  name: string;
  errors: any;
  ref: any;
};

const TextInput: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  (
    {
      label, type, placeholder, onChange, name, errors, ...rest
    },
    ref,
  ) => (
    <>
      <label htmlFor="domId" className="text-violet text-sm font-bold">
        {label}
        {' '}
        <span className="text-red text-sm font-medium">*</span>
      </label>
      <input
        className="h-10 w-full mt-1 mb-8 rounded border border-solid border-offGray px-3 outline-0"
        type={type}
        id="domId"
        placeholder={placeholder}
        {...rest}
        name={name}
        onChange={onChange}
        ref={ref}
      />
      {errors && errors[name] && <p className="text-red text-sm text-right -mt-4 mb-4">{errors[name]?.message}</p>}
    </>
  ),
);

export default TextInput;
