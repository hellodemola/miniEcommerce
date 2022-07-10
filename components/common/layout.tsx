import React from 'react';
// import Progress from '../progressBar/progress';

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex h-screen">
    <div className="flex-none bg-violet w-20 h-full" />
    <div className="w-128 bg-white h-full container mx-auto">
      <p className="mt-28 ml-28 mb-7 text-violet font-bold text-5xl">
        Nut
        <span className="font-normal">Available</span>
      </p>
      {/* <div>
        <Progress />
      </div> */}
      <div>{children}</div>
    </div>
  </div>
);

export default Layout;
