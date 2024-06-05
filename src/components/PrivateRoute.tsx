import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useStore from '../store/useStore';

interface PrivateRouteProps {
  path: string;
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const user = useStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route path={path} element={element} />;
};

export default PrivateRoute;
