import { RelayEnvironmentProvider } from 'react-relay';

import Environment from '../data/relay';
import { StoreProvider } from './store';

type Props = {
  children: React.ReactNode;
};
const Providers = ({ children }: Props) => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <StoreProvider>
        {children}
      </StoreProvider>
    </RelayEnvironmentProvider>
  );
};

export default Providers;
