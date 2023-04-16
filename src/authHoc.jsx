import React, { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    useEffect(() => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        // redirect to login page if user is not authenticated
        window.location.href = '/';
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
