import React from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import PrimaryThemeProvider from './theme/PrimaryThemeProvider';

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {

    return (
        <PrimaryThemeProvider>
            <CssBaseline />
                {children}
            <ToastContainer autoClose={4000} />
        </PrimaryThemeProvider>
    );
}
