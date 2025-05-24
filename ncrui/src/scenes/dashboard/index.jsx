import { Box } from '@mui/material'
import React from 'react'
import Statistics from '../../components/dashboard_components/statistics/Statistics'
import Projects from '../../components/dashboard_components/Projectsoverview/Projectsoverview';
import Userinsights from '../../components/dashboard_components/UserInsights/Userinsights';
import Kenya from "@react-map/kenya";
import Activeprojects from '../../components/dashboard_components/Activeprojects/Activeprojects';

const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", ml: "20px", mb: "40px" }}>


        <Box sx={{ flexDirection: "column", display: "flex", gap: "20px", }}>
          <Statistics />
          <Projects />
        </Box>
        <Box sx={{ flexDirection: "row", display: "flex", gap: "20px", }}>
          <Userinsights />
          <Activeprojects />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;