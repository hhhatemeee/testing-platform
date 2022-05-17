import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function withAuth<T>(WrappedComponent: React.FC | React.FC<T> ): React.FC<T>{
  const Wrapper: React.FC<T> = (props: T): JSX.Element => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) {
        navigate('/login');
      }
    }, [isAuth]);
    
    return props
    ? <WrappedComponent {...props} />
    : <WrappedComponent />
  }
  
  return Wrapper;
};

export default withAuth;
