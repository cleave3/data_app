import { Pie } from "react-chartjs-2";
import { PieData } from "../types";
import { generateRandomColors } from "../utils/utilities";

export const PieChart = ({ label, labels, data }: PieData) => {
    return (
        <Pie
            data={{
                labels,
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: generateRandomColors(labels.length),
                        borderWidth: 2,
                        label,
                        data
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
                showLine: false
            }}
        />
    );
};