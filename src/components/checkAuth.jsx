import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const CheckAuth = ({ children, ...rest }) => {
  const auth = useAuth();
  const cookie = window.localStorage.getItem('user');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user || cookie ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
