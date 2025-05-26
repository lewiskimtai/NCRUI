import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ForestIcon from '@mui/icons-material/Forest';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const data = [
    { icon: <WorkIcon sx={{ color: '#9c27b0', fontSize: 40 }} />, number: '2', text: 'No. Of Projects' },
    { icon: <ForestIcon sx={{ color: '#4caf50', fontSize: 40 }} />, number: '12,123', text: 'No. of Credits Issued' },
    { icon: <AttachMoneyIcon sx={{ color: '#ff9800', fontSize: 40 }} />, number: '$398,645', text: 'Expected Credits per annum' },
    { icon: <AttachMoneyIcon sx={{ color: '#ff9800', fontSize: 40 }} />, number: '$398,645', text: 'Total Projected' },
];

const Card = ({ icon, number, text }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 205, // Fixed width for uniformity
            height: 50,
            borderRadius: "30px",
            boxShadow: 2,
            bgcolor: 'background.paper',
            p: 2,
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
            <Box>{icon}</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{number}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{text}</Typography>
            </Box>
        </Box>
    </Box>
);

const Dashboard = () => (
    <Grid container spacing={2} justifyContent="center">
        {data.map((item, index) => (
            <Grid item xs={3} key={index}> {/* Ensures equal-width cards */}
                <Card icon={item.icon} number={item.number} text={item.text} />
            </Grid>
        ))}
    </Grid>
);

export default Dashboard;
