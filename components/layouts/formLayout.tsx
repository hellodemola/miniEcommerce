import { Spinner } from 'evergreen-ui';
import React from 'react';

type Props = {
    isLoading: boolean;
    children: any;
};

const FormLayout = ({ isLoading, children }: Props) => (
  <div>
    {isLoading
      ? (
        <div className="flex items-center justify-center h-80">
          <Spinner />
        </div>
      )
      : children }
  </div>
);

export default FormLayout;
