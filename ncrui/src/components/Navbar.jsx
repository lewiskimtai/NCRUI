import React from "react";
import { AppBar, TextField, InputAdornment, Toolbar, Avatar, Badge, IconButton, Typography, useMediaQuery, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlexBetween from "./FlexBetween";
import { Menu as MenuIcon } from "@mui/icons-material";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (
        <AppBar sx={{ position: "static", background: "none", boxShadow: "none", padding: isSmallScreen ? "10px 0px" : "5px 10px" }}>
            <Toolbar sx={{ flexDirection: "row", justifyContent: "space-between", marginRight: isSmallScreen ? "50px" : "0px" }}>
                {/* LEFT SIDE */}
            
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                        <MenuIcon />
                    </IconButton>
                    <TextField
                        variant="outlined"
                        placeholder="Search here..."
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ fontSize: isSmallScreen ? "20px" : "20px" }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            width: { xs: "100px", sm: "150px", md: "300px" }, // Responsive width
                            "& fieldset": { border: "none" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                                backgroundColor: "#f0f0f0",
                                fontSize: "14px",
                                height: isSmallScreen ? "30px" : "40px",
                            },
                            "& .MuiInputBase-input": {
                                fontSize: isSmallScreen ? "8px" : "14px",
                                padding: isSmallScreen ? "10px 0px" : "10px 0px",
                            },
                        }}
                    />
                </Box>

                {/* RIGHT SIDE */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton sx={{ backgroundColor: "white", marginRight: "40px" ,
                        width: isSmallScreen ? "30px" : "30px", height: isSmallScreen ? "30px" : "30px",
                        justifyItems: "center", alignItems: "center" }}>
                        <Badge
                            badgeContent={12}
                            sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: "#f1da0a",
                                    color: "white",
                                    fontSize: isSmallScreen ? "10px" : "10px", // Adjust font size
                                    height: isSmallScreen ? "14px" : "15px", // Adjust height
                                    minWidth: isSmallScreen ? "14px" : "15px", // Adjust width
                                    padding: isSmallScreen ? "0px" : "2px", // Adjust padding
                                    transform: "scale(0.8) translate(50%, -50%)", // Moves badge slightly
                                },
                            }}
                        >
                            <NotificationsNoneOutlinedIcon sx={{ fontSize: isSmallScreen ? "20px" : "20px" }} />
                        </Badge>
                    </IconButton>



                    <Box >
                        <Typography variant="h6" sx={{ color: "black", fontSize: isSmallScreen ? "10px" : "16px" }}>
                            Hello, Brian
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "gray", fontSize: isSmallScreen ? "7px" : "12px" }}>
                            Project Originator
                        </Typography>
                    </Box>


                    <Avatar
                        alt="Brian"
                        src="" // Replace with actual image URL
                        sx={{ marginLeft: "10px", width: isSmallScreen ? "30px" : "30px", height: isSmallScreen ? "30px" : "30px" }}
                    />

                    <IconButton sx={{ marginLeft: 2, backgroundColor: "darkblue", 
                        width: isSmallScreen ? "30px" : "30px", height: isSmallScreen ? "30px" : "30px",
                        justifyItems: "center", alignItems: "center" }}>
                        <Badge
                            badgeContent={"!"}
                            sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: "red",
                                    color: "white",
                                    fontSize: isSmallScreen ? "10px" : "10px", // Adjust font size
                                    height: isSmallScreen ? "14px" : "15px", // Adjust height
                                    minWidth: isSmallScreen ? "14px" : "15px", // Adjust width
                                    padding: isSmallScreen ? "0px" : "2px", // Adjust padding
                                    transform: "scale(0.8) translate(50%, -50%)", // Moves badge slightly
                                },
                            }}
                        >
                            <SettingsOutlinedIcon sx={{ color: "white", fontSize: isSmallScreen ? "20px" : "20px" }} />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
