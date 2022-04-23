import { Navigate, useLocation } from "react-router-dom"
import React from 'react'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const isAuthenticated = true

    let location = useLocation();

    if (!isAuthenticated) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
  }
