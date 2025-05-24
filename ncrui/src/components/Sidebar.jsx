import React, { useState, useEffect } from "react";
import {
    Drawer,
    ListItemButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import {
    Dashboard as DashboardIcon,
    Group as GroupIcon,
    Assignment as AssignmentIcon,
    Person as PersonIcon,
    VerifiedUser as VerifiedUserIcon,
    BarChart as BarChartIcon,
    Settings as SettingsIcon,
    Favorite as FavoriteIcon,
    ChevronLeft,
} from "@mui/icons-material";
import nemaImage from "./nema.jpg"; // Adjust path as necessary

/**
 * Sidebar component for navigation with responsive behavior.
 */
const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={styles.drawer(isNonMobile, drawerWidth)}
                >
                    {/* Sidebar Header */}
                    <Box sx={styles.header}>
                        {!isNonMobile && (
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                        <Box sx={styles.logoContainer}>
                            <img src={nemaImage} alt="NEMA" style={styles.logo} />
                        </Box>
                    </Box>

                    {/* Navigation List */}
                    <List>
                        {navItems.map(({ text, icon }) => {
                            const lcText = text.toLowerCase().replace(/\s/g, "-"); // URL-friendly version

                            return (
                                <ListItem key={lcText} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText);
                                        }}
                                        sx={styles.listItem(active === lcText)}
                                    >
                                        <Box sx={styles.iconContainer(active === lcText)}>
                                            <ListItemIcon sx={styles.listIcon(active === lcText)}>{icon}</ListItemIcon>
                                        </Box>
                                        <ListItemText
                                            primary={text}
                                            sx={styles.listText(active === lcText)}
                                            disableTypography
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                    {/* Footer */}
                    <Box sx={styles.footer}>
                        <Typography sx={styles.footerTitle}>Verst Carbon</Typography>
                        <Typography sx={styles.footerText}>© 2024 All Rights Reserved</Typography>
                        <Typography sx={styles.footerText}>
                            Made with <FavoriteIcon sx={styles.heartIcon} /> by Verst Carbon
                        </Typography>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;

/**
 * Navigation items with icons.
 */
const navItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Authorized Projects", icon: <GroupIcon /> },
    { text: "Projects Management", icon: <AssignmentIcon /> },
    { text: "User Management", icon: <PersonIcon /> },
    { text: "Compliance Monitoring", icon: <VerifiedUserIcon /> },
    { text: "Data Analytics and Reports", icon: <BarChartIcon /> },
    { text: "System Settings", icon: <SettingsIcon /> },
];

/**
 * Centralized styles for maintainability and readability.
 */
const styles = {
    drawer: (isNonMobile, drawerWidth) => ({
        width: drawerWidth,
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
        },
    }),
    header: {
        margin: "0.5rem 2rem 0.5rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logoContainer: {
        textAlign: "center",
    },
    logo: {
        width: "80%",
        height: "80%",
    },
    listItem: (isActive) => ({
        color: isActive ? "green" : "inherit",
        display: "flex",
        alignItems: "center",
    }),
    iconContainer: (isActive) => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isActive ? "50px" : "auto",
        height: isActive ? "50px" : "auto",
        backgroundColor: isActive ? "green" : "transparent",
        borderRadius: "50%",
        marginLeft: isActive ? "20px" : "10px",
    }),
    listIcon: (isActive) => ({
        marginLeft: isActive ? "30px" : "20px",
        color: isActive ? "white" : "inherit",
        fontSize: isActive ? "2rem" : "1rem",
    }),
    listText: (isActive) => ({
        fontSize: "12px",
        fontWeight: "bold",
        color: isActive ? "green" : "inherit",
        marginLeft: isActive ? "10px" : "-20px",
    }),
    footer: {
        padding: "16px",
        textAlign: "left",
    },
    footerTitle: {
        fontSize: "10px",
        fontWeight: "bold",
    },
    footerText: {
        fontSize: "8px",
    },
    heartIcon: {
        height: "8px",
        width: "8px",
        color: "red",
    },
};
