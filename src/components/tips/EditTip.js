
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { getMoods } from '../moods/MoodsManager';
import FormControlLabel from '@mui/material/FormControlLabel';
import { forwardRef, useEffect, useState } from 'react';
import { createTip, editTip, getSingleTip, getUserTips } from './TipsManager';
import { FormControl } from '@mui/material';
import { Zoom } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom';
import Typeography from '@mui/material/Typography'
const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export const EditTip = () => {
    const [tip, setTip] = useState({})
    const [moods, setMoods] = useState([])
    const [originalMood, setOriginalMood] = useState(0)
    const [open, setOpen] = useState(true)
    const [shownMood, setShownMood] = useState()
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


    return (
        <div className='authored-tips-container'>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}>
                <DialogContent>
                    <Typeography component="h3"><h3>Edit Tip:</h3></Typeography>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={tip.id}
                            value={tip.tip}
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={tipHandler}
                        />
                    </FormControl>
                    <p><h4>This tip is for when you are:</h4></p>
                    
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        id={tip.mood_id}
                        name="radio-buttons-group"
                        value={originalMood}
                        onChange={e => setOriginalMood(e.target.value)}
                    >
                        {
                            moods.map(
                                mood =>
                                    <FormControlLabel key={`mood-${mood.id}`} value={mood.id} control={<Radio />} label={mood.mood} />
                            )
                        }
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={() => {
                            const newTip = {
                                id: tip.id,
                                tip: tip.tip,
                                mood: parseInt(originalMood)
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