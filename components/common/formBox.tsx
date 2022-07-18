import React from 'react';

type Props = {
  children: any;
};

const FormBox: React.FC<Props> = ({ children }) => (
  <div className="w-full h-screen sm:h-90 sm:pt-24 bg-white rounded-xl shadow-xl pl-14 pr-16 pt-4 mt-16 sm:w-128">
    <div>{children}</div>
  </div>
);

export default FormBox;
