
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { editTip, getSingleTip } from './TipsManager';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import { getMoods } from '../moods/MoodsManager';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import { useParams, useHistory } from 'react-router-dom';
import { Zoom } from '@mui/material';
const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export const EditTip = () => {
    const [tip, setTip] = useState({})
    const [moods, setMoods] = useState([])
    const [originalMood, setOriginalMood] = useState(0)
    const [open, setOpen] = useState(true)
    const {tipId} = useParams()
    const history = useHistory()
    
    useEffect(() => {
        getSingleTip(tipId)
            .then(data=> {setTip(data)
                setOriginalMood(data.mood.id)})
                .then(getMoods)
                .then(data=> setMoods(data))
    }, [])

    const handleClose = () => {
        history.push('/')
    };

    const tipHandler = (e) => {
        const copy = { ...tip }
        copy.tip = e.target.value
        setTip(copy)
    }

    const moodHandler = (e) => {
        setOriginalMood(e.target.value)
        const copy = {...tip}
        copy.mood = e.target.value
        setTip(copy)
    }

    const handleChange = (e) => {
        const copy = { ...tip }
        copy.public = !copy.public
        setTip(copy)
    };

    return (
        <div className='authored-tips-container'>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}>
                <DialogContent>
                    <h3>Edit Tip:</h3>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={tip.tip}
                            value={tip.tip}
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={tipHandler}
                        />
                    </FormControl>
                    <h4>This tip is for when you are:</h4>
                    
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        id={tip.mood_id}
                        name="radio-buttons-group"
                        value={originalMood}
                        onChange={moodHandler}
                    >
                        {
                            moods.map(
                                mood =>
                                    <FormControlLabel key={`mood-${mood.id}`} value={mood.id} control={<Radio />} label={mood.mood} />
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
                        onClick={() => {
                            const newTip = {
                                id: tip.id,
                                tip: tip.tip,
                                mood: parseInt(originalMood),
                                public: tip.public
                            }
                            editTip(newTip)
                            .then(handleClose)}
                        }>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}