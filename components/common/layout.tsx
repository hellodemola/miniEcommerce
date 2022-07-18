import React from 'react';
// import Progress from '../progressBar/progress';

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex min-h-screen">
    <div className="hidden bg-violet w-20 sm:flex-none sm:flex" />
    <div className="w-full bg-white container mx-auto sm:w-128">
      <p className="mt-28 ml-0 text-center mb-7 text-violet font-bold text-5xl sm:ml-28 sm:text-left">
        Nut
        <span className="font-normal">Available</span>
      </p>
      <div>{children}</div>
    </div>
  </div>
);

export default Layout;
