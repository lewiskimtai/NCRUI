import React from "react";
import { AppBar, TextField, InputAdornment, Toolbar, Avatar, Badge, IconButton, Typography, useMediaQuery, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Menu as MenuIcon } from "@mui/icons-material";

/**
 * Navbar component that provides top-level navigation
 * with search functionality, notifications, user profile, and settings.
 */
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const isMobile = useMediaQuery("(max-width:400px)");
    const isTablet = useMediaQuery("(max-width:1024px)");

    return (
        <AppBar sx={{ ...styles.appBar, width: isMobile ? "400px" : "99%" }}>
            <Toolbar sx={styles.toolbar }>

                {/* LEFT SIDE */}
                <Box sx={styles.leftSection}>
                    {isMobile && (
                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <TextField
                        variant="outlined"
                        placeholder="Search here..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={styles.icon} />
                                </InputAdornment>
                            ),
                        }}
                        sx={styles.searchField(isMobile, isTablet)}
                    />
                </Box>

                {/* RIGHT SIDE */}
                <Box sx={styles.rightSection}>
                    {/* Notifications */}
                    <IconButton sx={styles.iconButton}>
                        <Badge badgeContent={12} sx={styles.notificationBadge}>
                            <NotificationsNoneOutlinedIcon sx={styles.icon} />
                        </Badge>
                    </IconButton>

                    {/* User Info */}
                    <Box>
                        <Typography variant="h6" sx={styles.username(isMobile)}>Hello, Brian</Typography>
                        <Typography variant="subtitle2" sx={styles.role(isMobile)}>Project Originator</Typography>
                    </Box>

                    {/* User Avatar */}
                    <Avatar alt="Brian" src="" sx={styles.avatar(isMobile)} />

                    {/* Settings */}
                    <IconButton sx={styles.settingsButton}>
                        <Badge badgeContent="!" sx={styles.settingsBadge}>
                            <SettingsOutlinedIcon sx={styles.settingsIcon} />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

/**
 * Centralized styling for better readability and maintenance
 */
const styles = {
    appBar: {
        position: "static",
        background: "none",
        boxShadow: "none",
        padding: "10px 0",
        // width should be set dynamically in the component, not here
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftSection: {
        display: "flex",
        alignItems: "center",
        gap: 2,
    },
    searchField: (isMobile, isTablet) => ({
        width: isMobile ? "100px" : isTablet ? "150px" : "300px",
        "& fieldset": { border: "none" },
        "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            backgroundColor: "#f0f0f0",
            fontSize: "14px",
            height: isMobile ? "30px" : "40px",
        },
        "& .MuiInputBase-input": {
            fontSize: isMobile ? "10px" : "14px",
            padding: "10px",
        },
    }),
    rightSection: {
        display: "flex",
        alignItems: "center",
        gap: 2,
    },
    iconButton: {
        backgroundColor: "white",
    },
    notificationBadge: {
        "& .MuiBadge-badge": {
            backgroundColor: "#f1da0a",
            color: "white",
            fontSize: "10px",
            height: "14px",
            minWidth: "14px",
            padding: "2px",
            transform: "scale(0.8) translate(50%, -50%)",
        },
    },
    username: (isMobile) => ({
        color: "black",
        fontSize: isMobile ? "10px" : "16px",
    }),
    role: (isMobile) => ({
        color: "gray",
        fontSize: isMobile ? "7px" : "12px",
    }),
    avatar: (isMobile) => ({
        marginLeft: "10px",
        width: isMobile ? "30px" : "40px",
        height: isMobile ? "30px" : "40px",
    }),
    settingsButton: {
        marginLeft: 2,
        backgroundColor: "darkblue",
    },
    settingsBadge: {
        "& .MuiBadge-badge": {
            backgroundColor: "red",
            color: "white",
            fontSize: "10px",
            height: "14px",
            minWidth: "14px",
            padding: "2px",
            transform: "scale(0.8) translate(50%, -50%)",
        },
    },
    settingsIcon: {
        color: "white",
        fontSize: "20px",
    },
    icon: {
        fontSize: "20px",
    },
};
