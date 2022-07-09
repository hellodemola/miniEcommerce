import React from 'react';

type Props = {
  label: string;
  type: string;
  placeholder: string;
  // register: any;
  value: string;
  onChange: any;
};

const TextInput: React.FC<Props> = ({
  label, type, placeholder, value, onChange, ...rest
}) => {
  const domId = 'input';
  return (
    <>
      <label htmlFor={domId} className="text-violet text-sm font-bold">
        {label}
        {' '}
        {' '}
        <span className="text-red text-sm font-medium">*</span>
      </label>
      <input className="h-10 w-full mt-1 mb-8 rounded border border-solid border-offGray px-3 outline-0" type={type} id={domId} placeholder={placeholder} {...rest} value={value} onChange={onChange} />
    </>
  );
};

export default TextInput;
