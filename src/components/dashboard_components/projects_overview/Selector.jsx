import React from "react";
import { Tabs, Tab } from "@mui/material";

// Import icons for each sector
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import CommuteIcon from "@mui/icons-material/Commute";
import DeleteIcon from "@mui/icons-material/Delete";
import ForestIcon from "@mui/icons-material/Forest";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

// Map each sector to its corresponding icon
const sectorIcons = {
    "Energy": <BatteryChargingFullIcon />,
    "Transport": <CommuteIcon />,
    "Waste": <DeleteIcon />,
    "Forestry & Land Use": <ForestIcon />,
    "Agriculture": <AgricultureIcon />,
    "Industrial Processes & Product Use": <PrecisionManufacturingIcon />,
};

const SectorSelector = ({ selectedSector, setSelectedSector, data }) => {
    const sectorNames = Object.keys(data);

    const handleChange = (event, newValue) => {
        setSelectedSector(sectorNames[newValue]);
    };

    return (
        <Tabs
            value={sectorNames.indexOf(selectedSector)}
            onChange={handleChange}
            sx={{
                backgroundColor: "#e2ecea", // Light gray background
                borderRadius: 4, // Rounded corners
                width: "540px", // Set width to fit content
            }}
            TabIndicatorProps={{ style: { display: "none" } }} // Removed blue indicator line
        >
            {sectorNames.map((sector, index) => (
                <Tab
                    key={index}
                    icon={sectorIcons[sector]}
                    iconPosition="top" // Arranges icon above the label
                    label={sector}
                    sx={{
                        minWidth: "80px",   // Minimum width per tab
                        width: "90px",      // Overall tab width
                        padding: "6px",     // Spacing adjustments
                        fontSize: "8px",    // Font size reduction
                        color: "black",     // Text color
                        "&.Mui-selected": {
                            backgroundColor: "#a3c4be", // Background for selected tab
                            color: "green",             // Contrast text color
                            borderRadius: 4,            // Rounded corners for selected tab
                            height: "60px",             // Height adjustment
                            borderBottomColor: "green", // Green border for the bottom
                            borderBottomWidth: "10px",       // Thickness of the bottom border
                        },
                    }}
                />
            ))}
        </Tabs>
    );
};

export default SectorSelector;
