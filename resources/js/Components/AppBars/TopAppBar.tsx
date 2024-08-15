import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import PrimaryLogo from '@/Components/PrimaryLogo';
import { PageProps } from '@/types';

export default function TopAppBar(props : PageProps) {

    return (
        <AppBar position="fixed" elevation={0} sx={{ borderBottom: 1, borderColor: '#0000001f', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar variant="dense">
                <Typography variant="h6" noWrap component="div">
                    Demo
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
