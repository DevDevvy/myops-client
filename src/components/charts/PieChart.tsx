
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home: FC<CheckInProps> = (props): JSX.Element => {
    <>
    {props.checkins}
    </>
}

interface CheckInProps {
    checkins: array,
}
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Time Ops',
        },
    },
};
export const data = {

    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart({checkins}: CheckInProps) {
    return <Pie data={data} options={options} />;
}
