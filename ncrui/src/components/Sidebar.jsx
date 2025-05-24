

import React, { useState, useEffect } from 'react';
import {
    Drawer,
    ListItemButton, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Box
} from '@mui/material';

import { useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ChevronLeft, } from "@mui/icons-material";
import FlexBetween from './FlexBetween';
import nemaImage from "./nema.jpg"; // Adjust the path as necessary

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
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            boxSixing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)", // Add shadow
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="0.5rem 2rem 0.5rem 1rem">

                            <FlexBetween >

                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                            <Box style={{ textAlign: 'center' }}>
                                <img
                                    src={nemaImage}
                                    alt="NEMA"
                                    style={{ width: "80%", height: "80%" }}
                                />
                            </Box>
                        </Box>
                        <List>
                            {[
                                { text: 'Dashboard', icon: <DashboardIcon /> },
                                { text: 'Committee', icon: <GroupIcon /> },
                                { text: 'Projects Management', icon: <AssignmentIcon /> },
                                { text: 'User Management', icon: <PersonIcon /> },
                                { text: 'Compliance Monitoring', icon: <VerifiedUserIcon /> },
                                { text: 'Data Analytics and Reports', icon: <BarChartIcon /> },
                                { text: 'System Settings', icon: <SettingsIcon /> }
                            ].map((item, index) => {
                                const lcText = item.text.toLowerCase().replace(/\s/g, '-'); // Fixing undefined lcText

                                return (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                color: active === lcText ? "green" : "inherit",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: active === lcText ? "50px" : "auto",
                                                    height: active === lcText ? "50px" : "auto",
                                                    backgroundColor: active === lcText ? "green" : "transparent",
                                                    borderRadius: "50%",
                                                    ml: active === lcText ? "20px" : "10px",
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        ml: active === lcText ? "30px" : "20px",
                                                        color: active === lcText ? "white" : "inherit", // White icon when active
                                                        fontSize: active === lcText ? "2rem" : "1rem", // Enlarged icon when active
                                                    }}
                                                >
                                                    {item.icon}
                                                </ListItemIcon>
                                            </Box>
                                            <ListItemText
                                                primary={item.text}
                                                sx={{
                                                    fontSize: "12px",
                                                    fontWeight: "bold",
                                                    color: active === lcText ? "green" : "inherit",
                                                    ml: active === lcText ? "10px" : "-20px",
                                                }}
                                                disableTypography={true}
                                            />
                                        </ListItemButton>
                                    </ListItem>




                                );
                            })}
                        </List>
                    </Box>
                    <Box style={{ padding: '16px', textAlign: 'left' }}>
                        <Typography style={{ fontSize: "10px", fontWeight: "bold" }}>Verst Carbon</Typography>
                        <Typography style={{ fontSize: "8px" }}>© 2024 All Rights Reserved</Typography>
                        <Typography style={{ fontSize: "8px" }}>Made with <FavoriteIcon style={{ height: "8px", width: "8px", color: 'red' }} /> by Verst Carbon</Typography>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;



