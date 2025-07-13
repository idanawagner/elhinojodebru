import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import logoHeader from '@/assets/logo.png';

import './Navbar.scss';
const navLinks = [
    { label: 'QUIENES SOMOS', path: '/about' },
    { label: 'HISTORIA', path: '/history' },
    {
        label: 'REMATE 2025',
        submenu: [
            { label: 'Genealogía', path: '/auction/genealogy' },
            { label: 'Catálogo online', path: '/auction/catalog' },
        ],
    },
    {
        label: 'INSTITUCIONAL',
        submenu: [
            {
                label: 'Galería de Fotos',
                path: '/institutional/photos-gallery',
            },
            { label: 'Prensa', path: '/institutional/press-articles' },
            { label: 'Visitas', path: '/institutional/visits' },
        ],
    },
    { label: 'CONTACTO', path: '/contact' },
];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDrawerSubmenus, setOpenDrawerSubmenus] = useState<{
        [key: string]: boolean;
    }>({});

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuOpen = (
        event: React.MouseEvent<HTMLElement>,
        label: string
    ) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(label);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    };

    const toggleDrawerSubmenu = (label: string) => {
        setOpenDrawerSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const drawer = (
        // Mobile
        <Box sx={{ textAlign: 'center' }}>
            <List>
                {navLinks.map((item) =>
                    item.submenu ? (
                        <Box key={item.label}>
                            <ListItem
                                component="div"
                                onClick={() => toggleDrawerSubmenu(item.label)}
                            >
                                <ListItemText primary={item.label} />
                                {openDrawerSubmenus[item.label] ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItem>
                            <Collapse
                                in={openDrawerSubmenus[item.label]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {item.submenu.map((subitem) => (
                                        <ListItem
                                            key={subitem.label}
                                            sx={{ pl: 4 }}
                                        >
                                            <Link
                                                to={subitem.path}
                                                onClick={handleDrawerToggle}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                }}
                                            >
                                                {subitem.label}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </Box>
                    ) : (
                        <ListItem key={item.label}>
                            <Link
                                to={item.path}
                                onClick={handleDrawerToggle}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    width: '100%',
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    return (
        <>
            {/* desktop */}
            <AppBar
                position="static"
                color="transparent"
                elevation={0}
                className="navbar"
                sx={{
                    paddingBlockStart: 2,
                    paddingInline: 9,
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                    }}
                >
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <img
                            src={logoHeader}
                            alt="Logo Cabaña El Hinojo de Bru"
                            loading="lazy"
                            className="logo"
                            width={160}
                            height={48}
                        ></img>{' '}
                    </Link>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 2,
                            alignItems: 'center',
                        }}
                    >
                        {navLinks.map((item) =>
                            item.submenu ? (
                                <Box key={item.label} sx={{ padding: 0 }}>
                                    <div
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={(e) =>
                                            handleMenuOpen(e, item.label)
                                        }
                                        className="nav-link"
                                    >
                                        {item.label}
                                    </div>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={openMenu === item.label}
                                        onClose={handleMenuClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        className="submenu-menu"
                                        slotProps={{
                                            list: {
                                                disablePadding: true,
                                                sx: {
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    width: '100vw',
                                                    flexWrap: 'wrap',
                                                },
                                            },
                                            paper: {
                                                sx: {
                                                    width: '100vw',
                                                    maxWidth: '100vw',
                                                    maxHeight:
                                                        'calc(100vh - 9rem)',
                                                    left: 0,
                                                    backgroundColor:
                                                        'transparent',
                                                    boxShadow: 'none',
                                                    overflowX: 'hidden',
                                                },
                                            },
                                        }}
                                    >
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                to={subitem.path}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                }}
                                            >
                                                <MenuItem
                                                    key={subitem.label}
                                                    onClick={handleMenuClose}
                                                >
                                                    {subitem.label}
                                                </MenuItem>
                                            </Link>
                                        ))}
                                    </Menu>
                                </Box>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="nav-link"
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
