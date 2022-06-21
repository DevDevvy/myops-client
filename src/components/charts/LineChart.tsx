import { jsx } from '@emotion/react';
import { Line } from 'react-chartjs-2';
import { DateTimeConverter } from '../utils/DateTimeConverter';
import { Link } from 'react-router-dom';
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

    scales: {
        y: {
            grid: {
                color: '#696969'
            }
        },
        x: {
            grid: {
                color: '#696969'
            }
        }
    }
};

export const LineChart = ({ checkins }: CheckInProps) => {
    // labels are for the date/time on bottom of chart
    const labels = checkins.map(checkin => {
        // empty array to convert datetime fields into readable strings
        const array = []
        const date = DateTimeConverter(checkin)
        array.push(date)
        return array
    });
    const data = {
        labels,
        datasets: [
            {
                label: 'Mood',
                data: checkins.map(checkin => checkin.mood_score),
                backgroundColor: 'rgba(255, 99, 132, .8)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Self-Talk',
                data: checkins.map(checkin => checkin.self_talk),
                backgroundColor: 'rgba(255, 159, 64, .8)',
                borderColor: 'rgba(255, 159, 64, 0.6)',
            },
            {
                label: 'Sleep Quality',
                data: checkins.map(checkin => checkin.sleep_quality),
                backgroundColor: 'rgba(255, 206, 86, .8)',
                borderColor: 'rgba(255, 206, 86, 0.6)',
            },
            {
                label: 'Coping Strategies',
                data: checkins.map(checkin => checkin.coping_strategies),
                backgroundColor: 'rgba(75, 192, 192, .8)',
                borderColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Productivity',
                data: checkins.map(checkin => checkin.productivity),
                backgroundColor: 'rgba(153, 102, 255, .8)',
                borderColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };
    return <Line options={options} data={data} />;
}

