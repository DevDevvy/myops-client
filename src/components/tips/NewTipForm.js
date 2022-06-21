
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { forwardRef, useState } from 'react';
import { createTip, getUserTips } from './TipsManager';
import { FormControl } from '@mui/material';
import { Zoom } from '@mui/material';
import Switch from '@mui/material/Switch';

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export const NewTipForm = ({ currentUser, setUserTips, moods, setMoods }) => {
    const [open, setOpen] = useState(false);
    const [tip, setTip] = useState({
        tip: "",
        mood: 1,
        public: false
    })

    const updateTipsList = () => {
        getUserTips(currentUser.user_id).then(data => setUserTips(data))
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        clearTip()
    };

    const handleChange = (e) => {
        const copy = { ...tip }
        copy.public = !copy.public
        setTip(copy)
    };

    const tipHandler = (e) => {
        const copy = { ...tip }
        copy.tip = e.target.value
        setTip(copy)
    }
    const moodHandler = (e) => {
        const copy = { ...tip }
        copy.mood = e.target.value
        setTip(copy)
    }

    const clearTip = () => {
        const tip = {
            tip: "",
            mood: 1,
            public: false
        }
        setTip(tip)
    }
    return (
        <div className='authored-tips-container'>
            <Button className="small-button" variant="contained" size="small" onClick={handleClickOpen}>
                Create New Tip
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}>
                <DialogContent>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={tip.tip}
                            label="New Tip"
                            value={tip.tip}
                            type="text"
                            fullWidth multiline
                            rows={2}
                            variant="standard"
                            onChange={tipHandler}
                        />
                    </FormControl>
                    <p>This tip is for when you are:</p>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        id={tip.mood}
                        name="radio-buttons-group"
                        value={tip.mood}
                        onChange={moodHandler}
                    >
                        {
                            moods.map(
                                mood =>
                                    <FormControlLabel key={mood.id} value={mood.id} control={<Radio />} label={mood.mood} />
                            )
                        }
                    </RadioGroup>
                    <FormControlLabel control={<Switch
                        checked={tip.public}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }} />} 
                        label="Make Public"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={() => createTip(tip)
                            .then(updateTipsList)
                            .then(handleClose)
                        }>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
