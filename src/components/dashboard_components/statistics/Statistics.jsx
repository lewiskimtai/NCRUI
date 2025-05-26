import React, { useState } from 'react';
import { Box, Typography, Avatar, Select, MenuItem, useMediaQuery } from '@mui/material';
import MovingIcon from '@mui/icons-material/Moving';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

/**
 * Statistics data array with details for different metrics.
 * Includes period-based data, percentage changes, icons, and styling colors.
 */
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
    const isMobile = useMediaQuery("(max-width: 320px)");
    const isTablet = useMediaQuery("(max-width:1024px)");

    return (
        <Box sx={styles.container}>
            {/* Header section */}
            <Box sx={styles.header}>
                <Box>
                    <Typography sx={styles.title}>Statistics</Typography>
                    <Typography sx={styles.subtitle}>Dashboard Summary</Typography>
                </Box>
                {/* Dropdown for selecting period */}
                <Select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    size="small"
                    sx={styles.select}
                >
                    {['Today', 'Past Week', 'Past Month', 'Past Year'].map(period => (
                        <MenuItem key={period} value={period}>
                            {period}
                        </MenuItem>
                    ))}
                </Select>
            </Box>

            {/* Statistics cards section */}
            <Box sx={{ ...styles.grid, flexDirection: isMobile ? 'row' : isTablet ? 'row' : 'row' }}>
                {statistics.map((stat, index) => (
                    <Box key={index} sx={{ ...styles.statCard, backgroundColor: stat.color }}>
                        <Box display="flex" flexDirection="column">
                            <Box sx={styles.cardHeader}>
                                <Typography sx={styles.statTitle}>{stat.title}</Typography>
                                <Avatar sx={{ backgroundColor: stat.bgcolor, color: stat.color }}>
                                    {stat.icon}
                                </Avatar>
                            </Box>
                            <Typography sx={styles.statValue}>{stat.periodData[selectedPeriod]}</Typography>
                            <Box sx={styles.changeContainer}>
                                <MovingIcon sx={{ color: "green" }} />
                                <Typography sx={styles.changeText}>{stat.percentage}</Typography>
                                <Typography sx={styles.changeLabel}>{stat.change}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Statistics;

/**
 * Styled-components using MUI's `sx` prop
 */
const styles = {
    container: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "1010px",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: "15px",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: "12px",
        color: "#717171",
        fontWeight: "lighter",
    },
    select: {
        height: "30px",
        backgroundColor: "green",
        color: "white",
        borderRadius: "20px",
        fontSize: "12px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
        },
        "& .MuiSvgIcon-root": {
            color: "white",
        }
    },
    grid: {
        mt: 2,
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
    },
    statCard: {
        width: "170px",
        height: "100px",
        borderRadius: "10px",
        padding: "10px",
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    statTitle: {
        fontSize: "12px",
        color: "rgb(159, 159, 159)",
        width: "120px",
    },
    statValue: {
        fontSize: "20px",
        fontWeight: "bolder",
    },
    changeContainer: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
    },
    changeText: {
        fontSize: "11px",
        color: "green",
    },
    changeLabel: {
        fontSize: "11px",
        color: "rgb(159, 159, 159)",
    }
};
