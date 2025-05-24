import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * ActiveProjects component displaying an overview of active projects with a map outline.
 */
const ActiveProjects = () => {
    return (
        <Box sx={styles.container}>
            {/* Header */}
            <Typography sx={styles.title}>Active Projects</Typography>

            {/* Map Outline */}
            <Box sx={styles.mapContainer}>
                <img src="./kenya.png" alt="Kenya Map" style={styles.map} />
            </Box>
        </Box>
    );
};

export default ActiveProjects;

/**
 * Centralized styles for better readability and maintenance.
 */
const styles = {
    container: {
        textAlign: "left",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "500px",
    },
    title: {
        fontSize: "15px",
        fontWeight: "bold",
    },
    mapContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "50%",
        height: "50%",
    },
};
