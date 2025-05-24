import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

/**
 * Layout component manages sidebar visibility and responsiveness.
 * It serves as the main structure for the application.
 */
const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 320px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Box sx={styles.container}>
            
            {/* Sidebar */}
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Main Content Area */}
            <Box sx={styles.mainContent}>
                <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <Outlet />
            </Box>
            
        </Box>
    );
};

export default Layout;

/**
 * Centralized styling for better organization and responsiveness.
 */
const styles = {
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#EDEADE",
    },
    mainContent: {
        flexGrow: 1,
    },
};
