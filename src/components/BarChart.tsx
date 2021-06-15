import { Bar } from "react-chartjs-2";
import { ChartProps } from "../types";

export const BarChart = ({ data }: ChartProps) => {
    return (
        <Bar
            data={{
                labels: data.labels,
                datasets: [
                    {
                        fill: false,
                        pointStyle: "star",
                        lineTension: 0.5,
                        backgroundColor: "#007bff",
                        borderColor: "#007bff",
                        borderWidth: 2,
                        label: "Sales",
                        data: data.sales
                    },
                    {
                        fill: false,
                        pointStyle: "star",
                        lineTension: 0.5,
                        backgroundColor: "#20c997",
                        borderColor: "#20c997",
                        borderWidth: 2,
                        label: "Profits",
                        data: data.profit
                    }
                ]
            }}
            width={100}
            height={500}
            options={{
                legend: {
                    display: true,
                    position: "top"
                },
                maintainAspectRatio: false,
                showLine: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            display: false
                        },
                    }]
                }
            }}
        />
    );
};