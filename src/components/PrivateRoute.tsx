import React from 'react';
import { Navigate } from 'react-router-dom';
import useStore from '../store/useStore';

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const user = useStore((state) => state.user);

    return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
