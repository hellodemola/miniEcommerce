import React from 'react';

type Props = {
  children: any;
};

const FormBox: React.FC<Props> = ({ children }) => (
  <div className="w-128 h-90 bg-white rounded-xl shadow-xl pl-14 pr-16 pt-24 mt-16">
    <div>{children}</div>
  </div>
);

export default FormBox;
