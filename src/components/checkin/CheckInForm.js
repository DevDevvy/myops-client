
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Button, Divider, Slider } from '@mui/material';
import "./CheckInForm.css"
import SendIcon from '@mui/icons-material/Send';
import { createCheckin } from './CheckInManager';
import { useHistory } from 'react-router-dom';
// styling for star rating
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

// labels for star ratings
const labels = {
    1: 'Horrible',
    2: 'Bad',
    3: 'Poor',
    4: 'Meh',
    5: 'OK',
    6: 'Good',
    7: 'Very Good',
    8: 'Excellent',
    9: 'Amazing',
    10: 'Perfect',
};
// labels for slider rating
const marks = [
    { value: 0, label: "0hrs" },
    { value: 3, label: "3hrs" },
    { value: 6, label: "6hrs" },
    { value: 9, label: "9hrs" },
    { value: 12, label: "12hrs" },
    { value: 15, label: "15hrs" },
    { value: 18, label: "18hrs" },
    { value: 21, label: "21hrs" },

]

const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const CheckInForm = () => {
    const history = useHistory()
    const [value, setValue] = useState({
        mood_score: 5,
        self_talk: 5,
        sleep_quality: 5,
        coping_strategies: 5,
        productivity: 5,
        work_time: 0,
        break_time: 0,
        personal_time: 0,
        sleep_time: 0,
        learning_time: 0,
        exercise_time: 0
    });
    const [hover, setHover] = useState({
        mood_score: 5,
        self_talk: 5,
        sleep_quality: 5,
        coping_strategies: 5,
        productivity: 5,
        work_time: 0,
        break_time: 0,
        personal_time: 0,
        sleep_time: 0,
        learning_time: 0,
        exercise_time: 0
    });


    return (
        <Box className='box-container'
            sx={{
                '& > legend': { mt: 2 },
            }}
        >

            <Typography component="h2">
                <h2>Take a deep breath and check-in</h2>
            </Typography>
            <Typography component="h3">
                <h3>Personal Ops Rating From 1-10
                    1 being the worst - 10 being the best</h3>
            </Typography>
            <Divider variant="inset" component="p" />
            <Typography component="legend"><h3>How was my mood today?</h3></Typography>
            <Typography component="h4">The predominant feeling I have had throughout the day was...</Typography>
            <Rating
                name="customized-10"
                defaultValue={5} max={10} required
                getLabelText={() => getLabelText(value.mood_score)}
                onChange={(event, newValue) => {
                    const copy = { ...value }
                    copy.mood_score = newValue
                    setValue(copy);
                }}
                onChangeActive={(event, newHover) => {
                    const copy = { ...value }
                    copy.mood_score = newHover
                    setHover(copy);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value.mood_score !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover.mood_score !== -1 ? hover.mood_score : value.mood_score]}</Box>
            )}
            <p><Divider variant="inset" component="p" /></p>
            <Typography component="legend"><h3>How did I do with self-talk?</h3></Typography>
            <Typography component="h4">Were my thoughts about myself or my work mainly negative, or was I compassionate towards myself and celebrated small wins...</Typography>
            <Rating
                name="customized-10"
                defaultValue={5} max={10} required
                getLabelText={() => getLabelText(value.self_talk)}
                onChange={(event, newValue) => {
                    const copy = { ...value }
                    copy.self_talk = newValue
                    setValue(copy);
                }}
                onChangeActive={(event, newHover) => {
                    const copy = { ...value }
                    copy.self_talk = newHover
                    setHover(copy);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value.self_talk !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover.self_talk !== -1 ? hover.self_talk : value.self_talk]}</Box>
            )}
            <p><Divider variant="inset" component="p" /></p>
            <Typography component="legend"><h3>How was the quality of my sleep last night?</h3></Typography>
            <Typography component="h4">Did I wake up a lot, not sleep very much, or sleep like a rock...</Typography>
            <Rating
                name="customized-10"
                defaultValue={5} max={10} required
                getLabelText={() => getLabelText(value.sleep_quality)}
                onChange={(event, newValue) => {
                    const copy = { ...value }
                    copy.sleep_quality = newValue
                    setValue(copy);
                }}
                onChangeActive={(event, newHover) => {
                    const copy = { ...value }
                    copy.sleep_quality = newHover
                    setHover(copy);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value.sleep_quality !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover.sleep_quality !== -1 ? hover.sleep_quality : value.sleep_quality]}</Box>
            )}
            <p><Divider variant="inset" component="p" /></p>
            <Typography component="legend"><h3>How well did I make use of my coping strategies?</h3></Typography>
            <Typography component="h4">Did I remember to take a deep breath, did I use ...</Typography>
            <Rating
                name="customized-10"
                defaultValue={5} max={10} required
                getLabelText={() => getLabelText(value.coping_strategies)}
                onChange={(event, newValue) => {
                    const copy = { ...value }
                    copy.coping_strategies = newValue
                    setValue(copy);
                }}
                onChangeActive={(event, newHover) => {
                    const copy = { ...value }
                    copy.coping_strategies = newHover
                    setHover(copy);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value.coping_strategies !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover.coping_strategies !== -1 ? hover.coping_strategies : value.coping_strategies]}</Box>
            )}
            <p><Divider variant="inset" component="p" /></p>
            <Typography component="legend"><h3>How productive was my day?</h3></Typography>
            <Typography component="h4">Did I get everything finished I needed to, did I feel slow, or did you reach all of your goals for the day...</Typography>
            <Rating
                name="customized-10"
                defaultValue={5} max={10} required
                getLabelText={() => getLabelText(value.productivity)}
                onChange={(event, newValue) => {
                    const copy = { ...value }
                    copy.productivity = newValue
                    setValue(copy);
                }}
                onChangeActive={(event, newHover) => {
                    const copy = { ...value }
                    copy.productivity = newHover
                    setHover(copy);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value.productivity !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover.productivity !== -1 ? hover.productivity : value.productivity]}</Box>
            )}
            <p><Divider /></p>
            <Typography component="h3">
                <h3>From 0-24 how many hours did you spend doing these...</h3>
            </Typography>
            <Typography component="p">
                <p>I worked...</p>
            </Typography>
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
            <Typography component="p">
                <p>Breaks during regular working hours...</p>
            </Typography>
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
            <Typography component="p">
                <p>Personal time spent on yourself or family...</p>
            </Typography>
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
            <Typography component="p">
                <p>Total time of sleep you had last night...</p>
            </Typography>
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
            <Typography component="p">
                <p>Total time you spent learning something today...</p>
            </Typography>
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
            <Typography component="p">
                <p>How much time you spent exercising today...</p>
            </Typography>
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
            <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={()=> createCheckin(value).then(history.push('/'))}
                >Send</Button>
        </Box>
    );
}