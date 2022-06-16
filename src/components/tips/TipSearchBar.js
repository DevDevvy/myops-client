import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { getTipsByMood } from './TipsManager';

export const TipSearchBar = ({moods, setTips}) => {
    const [moodSearch, setMoodSearch] = useState('');

    const handleChange = (event) => {
        // setMoodSearch(event.target.value);
        getTipsByMood(event.target.value)
        .then(data=> setTips(data))
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id="mood-select">Search Mood</InputLabel>
                <Select
                    labelId="Select Mood"
                    id="selected-mood"
                    value={moodSearch}
                    onChange={handleChange}
                    label="Moods"
                >
                    <MenuItem value="">
                        <em>Choose...</em>
                    </MenuItem>
                    {
                        moods?.map(mood => {
                            return <MenuItem value={mood.id}>{mood.mood}</MenuItem>
                        })
                    }
                    
                </Select>
            </FormControl>
        </div>
    );
}