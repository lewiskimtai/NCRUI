import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ data = [] }) => {
    if (!data.length) return <p>No data available</p>;

    const chartData = {
        labels: data.map((item) => item.month),
        datasets: [
            {
                label: "Approved",
                data: data.map((item) => item.approved),
                backgroundColor: "green",
                barThickness: 10,
            },
            {
                label: "Pending",
                data: data.map((item) => item.pending),
                backgroundColor: "purple",
                barThickness: 10,
            },
            {
                label: "Rejected",
                data: data.map((item) => item.rejected),
                backgroundColor: "orange",
                barThickness: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "left",
            },
        },
        scales: {
            x: {
                categoryPercentage: 0.9,
                barPercentage: 0.3,
                grid: {
                    display: false, // ❌ Removes grid lines on X-axis
                },
            },
            y: {
                grid: {
                    display: false, // ❌ Removes grid lines on Y-axis
                },
            },
        },
    };

    return (
        <div style={{ height: "300px" }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default ChartComponent;
