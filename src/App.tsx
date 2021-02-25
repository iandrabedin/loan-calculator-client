import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import AuthenticatedApp from './pages/authenticatedApp';
import UnauthenticatedApp from './pages/unauthenticatedApp';

const App = () => {
  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
