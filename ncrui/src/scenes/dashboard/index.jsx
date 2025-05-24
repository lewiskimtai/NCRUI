import React from "react";
import { Box } from "@mui/material";
import Statistics from "../../components/dashboard_components/statistics/Statistics";
import Projects from "../../components/dashboard_components/Projectsoverview/Projectsoverview";
import Userinsights from "../../components/dashboard_components/UserInsights/Userinsights";
import Kenya from "@react-map/kenya";
import Activeprojects from "../../components/dashboard_components/Activeprojects/Activeprojects";

/**
 * Dashboard component providing an overview of project statistics, user insights, and active projects.
 */
const Dashboard = () => {
  return (
    <Box sx={styles.container}>
      {/* Top Section: Statistics & Projects Overview */}
      <Box sx={styles.section}>
        <Statistics />
        <Projects />
      </Box>

      {/* Bottom Section: User Insights & Active Projects */}
      <Box sx={styles.sectionRow}>
        <Userinsights />
        <Activeprojects />
      </Box>
    </Box>
  );
};

export default Dashboard;

/**
 * Centralized styles for better readability and maintainability.
 */
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginLeft: "20px",
    marginBottom: "40px",
    width: "100%",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  sectionRow: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" }, // Responsive layout adjustment
    gap: "20px",
  },
};
