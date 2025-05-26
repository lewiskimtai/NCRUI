import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box, Typography } from "@mui/material";

/**
 * User distribution data for the pie chart visualization.
 */
const data = [
    { name: "Admins", value: 35 },
    { name: "Proponents", value: 65 },
];

const COLORS = ["#6A0DAD", "#00C49F"];

/**
 * Custom label component for PieChart to display percentage values.
 */
const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const labelWidth = 80;
    const labelHeight = 25;

    return (
        <>
            {/* Background with rounded corners */}
            <rect x={x - labelWidth / 2} y={y - labelHeight / 2} rx="10" ry="10"
                width={labelWidth} height={labelHeight} fill="white" />

            {/* Text centered inside the rectangle */}
            <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central"
                fontSize="12px" fontWeight="bold">
                {`${data[index].value}%`}
            </text>
        </>
    );
};

const UserInsights = () => {
    return (
        <Box sx={styles.container}>
            {/* Header */}
            <Typography sx={styles.title}>User Insights</Typography>
            <Typography sx={styles.subtitle}>856 total users</Typography>

            {/* Pie Chart */}
            <PieChart width={500} height={200}>
                <Pie
                    data={data}
                    cx={250}
                    cy={80}
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    paddingAngle={3}
                    label={CustomLabel}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Box>
    );
};

export default UserInsights;

/**
 * Centralized styles for improved readability and maintainability.
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
    subtitle: {
        fontSize: "12px",
        color: "#717171",
        fontWeight: "lighter",
    },
};
