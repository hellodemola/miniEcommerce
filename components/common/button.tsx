import React from 'react';
// chilren should be passed as props
type Props = {
  children: string;
  disable: boolean;
};

const CustomButton: React.FC<Props> = ({ children, disable }) => (
  <button
    type="submit"
    className="text-white bg-violet h-10 w-full px-auto py-2 rounded-sm text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={disable}
  >
    {children}
  </button>
);

export default CustomButton;
