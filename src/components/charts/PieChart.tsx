
import { jsx } from '@emotion/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "#fff";
ChartJS.register(ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
    color: '#FFFFFF'
});

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
        datalabels : {
            clip: false,
            anchor: 'start',
            color: "#FFCE56",
            
        },
        title: {
            display: true,
            text: `Time Ops (hrs)`,
        },
    },
    
};

export const PieChart = ({ checkins }: CheckInProps) => {
    if (checkins.length > 1) {
        // create array of times for each category
        const personal = checkins?.map(checkin => checkin.personal_time)
        const breaks = checkins?.map(checkin => checkin.break_time)
        const sleep = checkins?.map(checkin => checkin.sleep_time)
        const learning = checkins?.map(checkin => checkin.learning_time)
        const exercise = checkins?.map(checkin => checkin.exercise_time)
        const work = checkins?.map(checkin => checkin.work_time)
    
        // adder used with .reduce() function to add times for each category
        const adder = (a, b) => {
            const c = a + b
            return c
        }
    
        // add up category array times with reduce function
        const personalTime = personal.reduce(adder)
        const breakTime = breaks.reduce(adder)
        const sleepTime = sleep.reduce(adder)
        const learningTime = learning.reduce(adder)
        const exerciseTime = exercise.reduce(adder)
        const workTime = work.reduce(adder)

        const data = {
            labels: ['Personal', 'Break', 'Sleep', 'Learning', 'Exercise', 'Work'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [personalTime, breakTime, sleepTime, learningTime, exerciseTime, workTime],
                    // data: [23, 6, 43, 8, 54, 3],
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
                    datalabels: {
                        anchor: 'end'
                    }
                },
            ],
        };
        return <Doughnut data={data} options={options} />;
    } else {
        return ""
    }
}
