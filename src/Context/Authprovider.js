import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // Check if user is logged in on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email, password) => {
        // In a real app, you would validate against a backend
        // For demo purposes, we'll use hardcoded credentials or stored users
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find(u => u.email === email && u.password === password);
        
        if (foundUser) {
            const userInfo = { email: foundUser.email, displayName: foundUser.displayName };
            setUser(userInfo);
            localStorage.setItem('user', JSON.stringify(userInfo));
            return Promise.resolve(userInfo);
        } else {
            setError('Invalid email or password');
            return Promise.reject(new Error('Invalid email or password'));
        }
    };

    const register = (email, password, displayName) => {
        // In a real app, you would make an API call to create the user
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.some(u => u.email === email)) {
            setError('User already exists');
            return Promise.reject(new Error('User already exists'));
        }

        const newUser = { email, password, displayName };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        const userInfo = { email, displayName };
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        return Promise.resolve(userInfo);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        return Promise.resolve();
    };

    const value = {
        user,
        setUser,
        login,
        register,
        logout,
        isLoading,
        setIsLoading,
        error,
        setError
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;