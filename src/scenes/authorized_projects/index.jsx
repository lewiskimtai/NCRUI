import { Box, Typography } from '@mui/material'
import React from 'react'
import Dashboard from '../../components/projects_components/cards'

const Authorizedprojects = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                paddingLeft: '40px',
                paddingTop: '20px'
            }}
        >
            <Box>
                <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>My Projects</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                marginTop: '20px',
                mr: '20px',
                shadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                height: '100%',
            }} >

                <Dashboard />
            </Box>
        </Box>
    )
}

export default Authorizedprojects