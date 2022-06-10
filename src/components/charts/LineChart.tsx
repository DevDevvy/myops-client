import { jsx } from '@emotion/react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'MyOps Personal Tracking',
        },
    },
};





export const LineChart = ({checkins}: CheckInProps) => {
    
    const labels = checkins.map(checkin=> checkin.date);
    const data = {
        labels,
        datasets: [
            {
                label: 'Mood',
                data: checkins.map(checkin => checkin.mood_score),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Self-Talk',
                data: checkins.map(checkin => checkin.self_talk),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Sleep Quality',
                data: checkins.map(checkin => checkin.sleep_quality),
                borderColor: 'rgb(240,255,80)',
                backgroundColor: 'rgba(255,255,0,0.51)',
            },
            {
                label: 'Coping Strategies',
                data: checkins.map(checkin => checkin.coping_strategies),
                borderColor: 'rgb(0,255,0)',
                backgroundColor: 'rgba(0,255,0,0.5)',
            },
            {
                label: 'Productivity',
                data: checkins.map(checkin => checkin.productivity),
                borderColor: 'rgb(255,255,255)',
                backgroundColor: 'rgba(255,255,255,0.5)',
            },
        ],
    };
    return <Line options={options} data={data} />;
}

