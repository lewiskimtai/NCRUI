import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import SectorSelector from "./Selector";
import ChartComponent from "./Barchart";


const projectData = {
    Energy: [
        { month: "Jan", approved: 78, pending: 30, rejected: 10 },
        { month: "Feb", approved: 85, pending: 25, rejected: 8 },
        { month: "Mar", approved: 70, pending: 20, rejected: 12 },
        { month: "Apr", approved: 94, pending: 15, rejected: 5 },
        { month: "May", approved: 80, pending: 18, rejected: 7 },
        { month: "Jun", approved: 88, pending: 22, rejected: 6 },
        { month: "Jul", approved: 75, pending: 25, rejected: 10 },
        { month: "Aug", approved: 90, pending: 20, rejected: 8 },
        { month: "Sep", approved: 85, pending: 18, rejected: 9 },
        { month: "Oct", approved: 92, pending: 15, rejected: 7 },
        { month: "Nov", approved: 78, pending: 25, rejected: 10 },
        { month: "Dec", approved: 80, pending: 20, rejected: 8 },
    ],
    Transport: [
        { month: "Jan", approved: 60, pending: 40, rejected: 15 },
        { month: "Feb", approved: 65, pending: 35, rejected: 12 },
        { month: "Mar", approved: 55, pending: 30, rejected: 18 },
        { month: "Apr", approved: 70, pending: 25, rejected: 10 },
        { month: "May", approved: 68, pending: 28, rejected: 12 },
        { month: "Jun", approved: 75, pending: 30, rejected: 10 },
        { month: "Jul", approved: 60, pending: 35, rejected: 15 },
        { month: "Aug", approved: 72, pending: 25, rejected: 12 },
        { month: "Sep", approved: 65, pending: 30, rejected: 14 },
        { month: "Oct", approved: 70, pending: 25, rejected: 10 },
        { month: "Nov", approved: 60, pending: 35, rejected: 15 },
        { month: "Dec", approved: 68, pending: 28, rejected: 12 },
    ],
    Waste: [
        { month: "Jan", approved: 50, pending: 30, rejected: 20 },
        { month: "Feb", approved: 55, pending: 25, rejected: 18 },
        { month: "Mar", approved: 45, pending: 20, rejected: 25 },
        { month: "Apr", approved: 60, pending: 15, rejected: 20 },
        { month: "May", approved: 58, pending: 18, rejected: 22 },
        { month: "Jun", approved: 65, pending: 20, rejected: 18 },
        { month: "Jul", approved: 50, pending: 25, rejected: 20 },
        { month: "Aug", approved: 62, pending: 15, rejected: 18 },
        { month: "Sep", approved: 55, pending: 20, rejected: 22 },
        { month: "Oct", approved: 60, pending: 15, rejected: 20 },
        { month: "Nov", approved: 50, pending: 25, rejected: 20 },
        { month: "Dec", approved: 58, pending: 18, rejected: 22 },
    ],
    "Forestry & Land Use": [
        { month: "Jan", approved: 40, pending: 20, rejected: 30 },
        { month: "Feb", approved: 45, pending: 15, rejected: 28 },
        { month: "Mar", approved: 35, pending: 10, rejected: 32 },
        { month: "Apr", approved: 50, pending: 5, rejected: 30 },
        { month: "May", approved: 48, pending: 8, rejected: 32 },
        { month: "Jun", approved: 55, pending: 10, rejected: 28 },
        { month: "Jul", approved: 40, pending: 15, rejected: 30 },
        { month: "Aug", approved: 52, pending: 5, rejected: 28 },
        { month: "Sep", approved: 45, pending: 10, rejected: 30 },
        { month: "Oct", approved: 50, pending: 5, rejected: 28 },
        { month: "Nov", approved: 40, pending: 15, rejected: 30 },
        { month: "Dec", approved: 48, pending: 8, rejected: 32 },
    ],
    Agriculture: [
        { month: "Jan", approved: 78, pending: 30, rejected: 10 },
        { month: "Feb", approved: 85, pending: 25, rejected: 8 },
        { month: "Mar", approved: 70, pending: 20, rejected: 12 },
        { month: "Apr", approved: 94, pending: 15, rejected: 5 },
        { month: "May", approved: 80, pending: 18, rejected: 7 },
        { month: "Jun", approved: 88, pending: 22, rejected: 6 },
        { month: "Jul", approved: 75, pending: 25, rejected: 10 },
        { month: "Aug", approved: 90, pending: 20, rejected: 8 },
        { month: "Sep", approved: 85, pending: 18, rejected: 9 },
        { month: "Oct", approved: 92, pending: 15, rejected: 7 },
        { month: "Nov", approved: 78, pending: 25, rejected: 10 },
        { month: "Dec", approved: 80, pending: 20, rejected: 8 },
    ],
    "Industrial Processes & Product Use": [
        { month: "Jan", approved: 60, pending: 40, rejected: 15 },
        { month: "Feb", approved: 65, pending: 35, rejected: 12 },
        { month: "Mar", approved: 55, pending: 30, rejected: 18 },
        { month: "Apr", approved: 70, pending: 25, rejected: 10 },
        { month: "May", approved: 68, pending: 28, rejected: 12 },
        { month: "Jun", approved: 75, pending: 30, rejected: 10 },
        { month: "Jul", approved: 60, pending: 35, rejected: 15 },
        { month: "Aug", approved: 72, pending: 25, rejected: 12 },
        { month: "Sep", approved: 65, pending: 30, rejected: 14 },
        { month: "Oct", approved: 70, pending: 25, rejected: 10 },
        { month: "Nov", approved: 60, pending: 35, rejected: 15 },
        { month: "Dec", approved: 68, pending: 28, rejected: 12 },
    ],
};


const Projects = () => {
    const [selectedSector, setSelectedSector] = useState(Object.keys(projectData)[0]);

    return (
        <Box sx={{ backgroundColor: "white", padding: "10px 10px", borderRadius: "20px", width: "1030px", 
        gap: "20px", display: "flex", flexDirection: "column"}}>
           
            
                <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>Projects Overview</Typography>
                <SectorSelector selectedSector={selectedSector} setSelectedSector={setSelectedSector} data={projectData} />
                <ChartComponent data={projectData[selectedSector]} />
           
            </Box>
    );
};

export default Projects;
