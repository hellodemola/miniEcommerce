import React from 'react';
// cgilren should be passed as props
type Props = {
  children: string;
};

const CustomButton: React.FC<Props> = ({ children }) => (
  <button type="submit" className="text-white bg-violet h-10 w-full px-auto py-2 rounded-sm text-sm font-medium">{children}</button>
);

export default CustomButton;
