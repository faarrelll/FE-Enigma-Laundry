import React from 'react'
import { AuthChecker } from '../../utils/AuthChecker'
import { Navigate } from 'react-router'


export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

    if (!AuthChecker()) {
        return <Navigate to="/login" />;
    }

    return children;
};

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {

    if (AuthChecker()) {
        return <Navigate to="/" />;
    }

    return children;
};
