import React from "react";
import { Box, Typography } from "@mui/material";

const Activeprojects = () => {
    return (
            <Box sx={{ textAlign: 'left', flexDirection: "column", backgroundColor: "white", padding: "10px", borderRadius: "20px", width: "500px" }}>
                <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>
                Active Projects
            </Typography>
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    justifyItems: "center",
                    display: "flex",
                }}
            >
                {/* Map Outline */}
                <img
                    src="./kenya.png"
                    alt="Kenya Map"
                    style={{ width: "50%", height: "50%" }}
                />
            </Box>
        </Box>
    );
};

export default Activeprojects;
