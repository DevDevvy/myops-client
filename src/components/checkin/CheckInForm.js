import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { Button, Divider } from '@mui/material';
import { createCheckin } from './CheckInManager';
import { RatingList } from './RatingList';
import { SliderList } from './SliderList';
import "./CheckInForm.css"

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

    // hover state
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

    // returns components used to record data points for check in form. 
    return (
        <div id="form-container">
            <Box className='box-container'
                sx={{ '& > legend': { mt: 4 }, }} >
                <div id="checkin-greeting">
                    <h1>Take a deep breath and check-in</h1>
                    <h3>Personal Ops Rating From 1-10</h3>
                </div>
                {/* ratings 1-10 */}
                <RatingList
                    hover={hover} setHover={setHover}
                    value={value} setValue={setValue}
                />

                <Divider variant="inset" />

                {/* times 0-24 */}
                <SliderList
                    value={value}
                    setValue={setValue}
                />

                <Stack direction="row" spacing={8}>

                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => createCheckin(value).then(history.push('/'))}>
                        Send
                    </Button>

                    <Button variant="outlined"
                        onClick={() => history.push('/')}>
                        Cancel
                    </Button>
                </Stack>
            </Box>
        </div>
    );
}