import React, { useState } from 'react';
import { Box, Typography, Avatar, Select, MenuItem, useMediaQuery } from '@mui/material';
import MovingIcon from '@mui/icons-material/Moving';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const statistics = [
    {
        title: 'Total Registered Projects',
        periodData: { Today: '40,689', 'Past Week': '283,000', 'Past Month': '1,020,000', 'Past Year': '12,500,000' },
        percentage: '8.5%',
        change: 'Up from yesterday',
        icon: <SignalCellularAltIcon />,
        color: '#ffe6e8',
        bgcolor: '#e90c93'
    },
    {
        title: 'Total Approved Projects',
        periodData: { Today: '10,293', 'Past Week': '78,500', 'Past Month': '350,000', 'Past Year': '4,300,000' },
        percentage: '1.3%',
        change: 'Up from past week',
        icon: <PeopleAltIcon />,
        color: '#ffefd8',
        bgcolor: '#f0858e'
    },
    {
        title: 'Total Registered Admins',
        periodData: { Today: '200', 'Past Week': '1,200', 'Past Month': '4,300', 'Past Year': '52,000' },
        percentage: '4.3%',
        change: 'Up from yesterday',
        icon: <LocalOfferIcon />,
        color: '#e3f2e4',
        bgcolor: '#0a7c12'
    },
    {
        title: 'Total Number of Committee',
        periodData: { Today: '12', 'Past Week': '100', 'Past Month': '400', 'Past Year': '5,000' },
        percentage: '1.8%',
        change: 'Up from yesterday',
        icon: <PersonAddIcon />,
        color: '#e8e1f4',
        bgcolor: '#8a58df'
    },
    {
        title: 'Total Penalties & Compliance Issues',
        periodData: { Today: '10', 'Past Week': '85', 'Past Month': '320', 'Past Year': '4,800' },
        percentage: '1.8%',
        change: 'Up from yesterday',
        icon: <PersonAddIcon />,
        color: '#e2f0d2',
        bgcolor: '#669e27'
    }
];

const Statistics = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Today');
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (
        <Box sx={{ backgroundColor: "white", padding: "20px", borderRadius: "20px", width: "1010px" }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>Statistics</Typography>
                    <Typography style={{ fontSize: "12px", color: "#717171", fontWeight: "lighter" }}>Dashboard Summary</Typography>
                </Box>
                {/* Dropdown for selecting period */}
                <Select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    size="small"
                    sx={{
                        height: "30px",
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "12px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white", // Changes the dropdown arrow color
                        }
                    }}
                >
                    <MenuItem value="Today">Today</MenuItem>
                    <MenuItem value="Past Week">Past Week</MenuItem>
                    <MenuItem value="Past Month">Past Month</MenuItem>
                    <MenuItem value="Past Year">Past Year</MenuItem>
                </Select>

            </Box>

            <Box mt={2} display={"flex"} flexDirection={"row"} gap={1}>
                {statistics.map((stat, index) => (
                    <Box key={index} sx={{ backgroundColor: stat.color, width: "185px", height: "100px", borderRadius: "10px", padding: "10px" }}>
                        <Box display="flex" flexDirection={"column"}>
                            <Box display="flex" flexDirection={"row"} justifyContent={"space-between"}>
                                <Typography style={{ fontSize: "12px", color: "rgb(159, 159, 159)", width: "120px" }}>{stat.title}</Typography>
                                <Avatar sx={{ backgroundColor: stat.bgcolor, color: stat.color }}>
                                    {stat.icon}
                                </Avatar>
                            </Box>
                            <Typography style={{ fontSize: "20px", fontWeight: "bolder" }}>{stat.periodData[selectedPeriod]}</Typography>
                            <Box display="flex" alignItems="center" gap={"5px"}>
                                <MovingIcon sx={{ color: "green" }} />
                                <Typography style={{ fontSize: "11px", color: "green" }}>{stat.percentage}</Typography>
                                <Typography style={{ fontSize: "11px", color: "rgb(159, 159, 159)" }}>{stat.change}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Statistics;
