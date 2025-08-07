import React from 'react';
import { Box } from '@mui/material';
import './FixedButton.scss';
import { NavLink } from 'react-router-dom';

const FixedButton = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 32,
                right: 32,
                zIndex: 1000,
            }}
        >
            <NavLink
                to="https://www.monasterio-tattersall.com/remates"
                target="_blank"
                rel="noopener noreferrer"
                className="fixedButton"
            >
                Remate online
            </NavLink>
        </Box>
    );
};

export default FixedButton;
