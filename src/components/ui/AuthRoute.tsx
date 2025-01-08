import React from 'react'
import { AuthChecker } from '../../utils/AuthChecker'
import { Navigate } from 'react-router'
import { AuthExpChecker } from '../../utils/AuthExpChecker'


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


export const JwtExpiredRoute = ({ children }: { children: React.ReactNode }) => {
    if (!AuthExpChecker()) {
        return <Navigate to="/login" />;
    }
    return children;
}
