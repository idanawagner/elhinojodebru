import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Collapse,
    Button,
    Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import logoHeader from '@/assets/logo.png';

import './Navbar.scss';

type NavLink = {
    label: string;
    path?: string;
    submenu?: { label: string; path: string }[];
};

const navLinks: NavLink[] = [
    { label: 'QUIENES SOMOS', path: '/about' },
    { label: 'HISTORIA', path: '/history' },
    {
        label: 'REMATE 2025',
        submenu: [
            { label: 'Genealogía', path: '/auction/genealogy' },
            { label: 'Catálogo online', path: '/auction/catalog' },
            {
                label: 'Condiciones de venta',
                path: '/auction/conditions',
            },
        ],
    },
    {
        label: 'INSTITUCIONAL',
        submenu: [
            {
                label: 'Galería de Fotos',
                path: '/institutional/photos-gallery',
            },
            { label: 'Prensa', path: '/institutional/press' },
            { label: 'Visitas', path: '/institutional/visits' },
        ],
    },
    { label: 'CONTACTO', path: '/contact' },
];

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDrawerSubmenus, setOpenDrawerSubmenus] = useState<
        Record<string, boolean>
    >({});

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    const toggleDrawerSubmenu = (label: string) => {
        setOpenDrawerSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const drawer = (
        <Box
            sx={{
                textAlign: 'center',
                padding: 2,
                backgroundColor: '#034a16',
                height: '100vh',
            }}
        >
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    color: '#fff',
                }}
            >
                {navLinks.map((item) =>
                    item.submenu ? (
                        <Box key={item.label}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() =>
                                        toggleDrawerSubmenu(item.label)
                                    }
                                >
                                    <ListItemText
                                        primary={item.label}
                                        slotProps={{
                                            primary: {
                                                sx: {
                                                    fontSize: '1.2rem',
                                                    fontWeight: 700,
                                                },
                                            },
                                        }}
                                    />
                                    {openDrawerSubmenus[item.label] ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                            </ListItem>

                            <Collapse
                                in={openDrawerSubmenus[item.label]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {item.submenu.map((sub) => (
                                        <ListItem
                                            key={sub.label}
                                            disablePadding
                                            sx={{ pl: 4 }}
                                        >
                                            <ListItemButton
                                                component={Link}
                                                to={sub.path}
                                                onClick={handleDrawerToggle}
                                            >
                                                <ListItemText
                                                    primary={sub.label}
                                                    slotProps={{
                                                        primary: {
                                                            sx: {
                                                                fontSize:
                                                                    '1.2rem',
                                                                fontWeight: 700,
                                                            },
                                                        },
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </Box>
                    ) : (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={item.path!}
                                onClick={handleDrawerToggle}
                            >
                                <ListItemText
                                    primary={item.label}
                                    slotProps={{
                                        primary: {
                                            sx: {
                                                fontSize: '1.2rem',
                                                fontWeight: 700,
                                            },
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    return (
        <>
            <div className="banner">
                <h2 className="banner-text">
                    Viernes 12 de septiembre Remate Anual - Presencial y por
                    streaming
                </h2>
            </div>
            <AppBar
                position="static"
                color="transparent"
                elevation={0}
                className="navbar"
                sx={{
                    paddingBlockStart: 2,
                    paddingInline: 9,
                    marginTop: 3,
                    position: 'relative',
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
                            className="logo"
                            width={160}
                            height={48}
                        />
                    </Link>

                    {/* Desktop menu */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 4,
                            alignItems: 'center',
                        }}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        {navLinks.map((item) => (
                            <Box
                                key={item.label}
                                onMouseEnter={() =>
                                    item.submenu && setOpenMenu(item.label)
                                }
                                onMouseLeave={() => setOpenMenu(null)}
                                sx={{ position: 'relative' }}
                            >
                                {item.path ? (
                                    <Button
                                        component={Link}
                                        to={item.path}
                                        className="nav-link "
                                    >
                                        {item.label}
                                    </Button>
                                ) : (
                                    <Button className="nav-link ">
                                        {item.label}
                                    </Button>
                                )}
                            </Box>
                        ))}
                        {openMenu && (
                            <Fade in={Boolean(openMenu)} timeout={400}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '82%',
                                        left: 0,
                                        width: '99vw',
                                        backgroundColor: 'white',
                                        boxShadow: 3,
                                        zIndex: 19990,
                                        paddingY: 1,
                                        margin: 0,
                                        pointerEvents: 'auto',
                                        overflow: 'hidden',
                                        height: '6rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    onMouseEnter={() => setOpenMenu(openMenu)}
                                    onMouseLeave={() => setOpenMenu(null)}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '2rem',
                                            maxWidth: '1200px',
                                            marginX: 'auto',
                                            paddingX: 2,
                                        }}
                                    >
                                        {navLinks
                                            .find(
                                                (item) =>
                                                    item.label === openMenu
                                            )
                                            ?.submenu?.map((sub) => (
                                                <Button
                                                    key={sub.label}
                                                    component={Link}
                                                    to={sub.path}
                                                    className="nav-link-submenu"
                                                >
                                                    {sub.label}
                                                </Button>
                                            ))}
                                    </Box>
                                </Box>
                            </Fade>
                        )}
                    </Box>

                    {/* Mobile menu icon */}
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, marginRight: '2rem' }}
                    >
                        <MenuIcon sx={{ width: '2rem', height: '2rem' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile drawer */}
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
