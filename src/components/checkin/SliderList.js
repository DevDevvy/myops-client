import { Slider } from '@mui/material';
import { marks } from './CheckinData';

export const SliderList = ({ setValue, value, }) => {

    return <div id="slider-list">

        <h3>From 0-24 how many hours did you spend doing these...</h3>
        <p>I worked...</p>

        <Slider
            aria-label="Hours"
            defaultValue={0}
            required
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            onChange={(event, newValue) => {
                const copy = { ...value }
                copy.work_time = newValue
                setValue(copy);
            }}
        />

        <p>Breaks during regular working hours...</p>

        <Slider
            aria-label="Hours"
            defaultValue={0}
            required
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            onChange={(event, newValue) => {
                const copy = { ...value }
                copy.break_time = newValue
                setValue(copy);
            }}
        />

        <p>Personal time spent on yourself or family...</p>

        <Slider
            aria-label="Hours"
            defaultValue={0}
            required
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            onChange={(event, newValue) => {
                const copy = { ...value }
                copy.personal_time = newValue
                setValue(copy);
            }}
        />

        <p>Total time of sleep you had last night...</p>

        <Slider
            aria-label="Hours"
            defaultValue={0}
            required
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            onChange={(event, newValue) => {
                const copy = { ...value }
                copy.sleep_time = newValue
                setValue(copy);
            }}
        />

        <p>Total time you spent learning something today...</p>

        <Slider
            aria-label="Hours"
            defaultValue={0}
            required
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            onChange={(event, newValue) => {
                const copy = { ...value }
                copy.learning_time = newValue
                setValue(copy);
            }}
        />

        <p>How much time you spent exercising today...</p>

        <Slider
            aria-label="Hours"
            defaultValue={0}
            required
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            onChange={(event, newValue) => {
                const copy = { ...value }
                copy.exercise_time = newValue
                setValue(copy);
            }}
        />
    </div>
}