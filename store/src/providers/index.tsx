import { RelayEnvironmentProvider } from 'react-relay';
import { RouterProvider } from "react-router-dom";

import Environment from '../data/relay';
import { StoreProvider } from './store';
import { routes } from '../router';

type Props = {
  children: React.ReactNode;
};
const Providers = ({ children }: Props) => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <StoreProvider>
        <RouterProvider router={routes} />
        {children}
      </StoreProvider>
    </RelayEnvironmentProvider>
  );
};

export default Providers;
