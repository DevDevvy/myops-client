import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { getCheckInsByDays } from './CheckInManager';

export const CheckInSearchBar = ({ setCheckins }) => {
    
    const [timeline, setTimeline] = useState([
        // api calls number of days- change "number" value for specific amount of days
        { name: "1 week", number: 7 }, { name: "2 weeks", number: 14 },
        { name: "1 month", number: 30 }, { name: "2 month", number: 60 },
        { name: "3 month", number: 90 }, { name: "6 month", number: 180 },
        { name: "1 year", number: 365 }
    ])

    const handleChange = (event) => {
        getCheckInsByDays(event.target.value)
            .then(data => setCheckins(data))
    };

    return (
        <div>
            <FormControl error variant="standard" sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id="mood-select">Time Line</InputLabel>
                <Select
                    labelId="Select Date"
                    id="selected-date"
                    onChange={handleChange}
                    label="Dates"
                    defaultValue={7}
                >
                    <MenuItem value="">
                        <em>Choose...</em>
                    </MenuItem>
                    {
                        timeline.map(time => {
                            return <MenuItem key={`time--${time.number}`} value={time.number}>{time.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}