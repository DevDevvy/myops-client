
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Divider } from '@mui/material';
import "./CheckInForm.css"
import { labels } from './CheckinData';

export const RatingList = (props) => {

    // styling for star rating
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const getLabelText = (value) => {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return <div id="ratings-list-container">
        <Divider variant="inset" component="p" />
        <h3>How was my mood today?</h3>
        <h4>The predominant feeling I have had throughout the day was...</h4>

        <Rating className="rating"
            name="customized-10"
            defaultValue={5} max={10} required
            getLabelText={() => getLabelText(props.value.mood_score)}
            onChange={(event, newValue) => {
                const copy = { ...props.value }
                copy.mood_score = newValue
                props.setValue(copy);
            }}
            onChangeActive={(event, newHover) => {
                const copy = { ...props.value }
                copy.mood_score = newHover
                props.setHover(copy);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {props.value.mood_score !== null && (
            <Box sx={{ ml: 2 }}>{labels[props.hover.mood_score !== -1 ? props.hover.mood_score : props.value.mood_score]}</Box>
        )}

        <Divider variant="inset" component="p" />
        <h3>How did I do with self-talk?</h3>
        <h4>Were my thoughts about myself or my work mainly negative, or was I compassionate towards myself and celebrated small wins...</h4>

        <Rating className="rating"
            name="customized-10"
            defaultValue={5} max={10} required
            getLabelText={() => getLabelText(props.value.self_talk)}
            onChange={(event, newValue) => {
                const copy = { ...props.value }
                copy.self_talk = newValue
                props.setValue(copy);
            }}
            onChangeActive={(event, newHover) => {
                const copy = { ...props.value }
                copy.self_talk = newHover
                props.setHover(copy);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {props.value.self_talk !== null && (
            <Box sx={{ ml: 2 }}>{labels[props.hover.self_talk !== -1 ? props.hover.self_talk : props.value.self_talk]}</Box>
        )}

        <Divider variant="inset" component="p" />
        <h3>How was the quality of my sleep last night?</h3>
        <h4>Did I wake up a lot, not sleep very much, or sleep like a rock...</h4>

        <Rating className="rating"
            name="customized-10"
            defaultValue={5} max={10} required
            getLabelText={() => getLabelText(props.value.sleep_quality)}
            onChange={(event, newValue) => {
                const copy = { ...props.value }
                copy.sleep_quality = newValue
                props.setValue(copy);
            }}
            onChangeActive={(event, newHover) => {
                const copy = { ...props.value }
                copy.sleep_quality = newHover
                props.setHover(copy);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {props.value.sleep_quality !== null && (
            <Box sx={{ ml: 2 }}>{labels[props.hover.sleep_quality !== -1 ? props.hover.sleep_quality : props.value.sleep_quality]}</Box>
        )}

        <Divider variant="inset" component="p" />
        <h3>How well did I make use of my coping strategies?</h3>
        <h4>Did I remember to take a deep breath, did I use ...</h4>

        <Rating className="rating"
            name="customized-10"
            defaultValue={5} max={10} required
            getLabelText={() => getLabelText(props.value.coping_strategies)}
            onChange={(event, newValue) => {
                const copy = { ...props.value }
                copy.coping_strategies = newValue
                props.setValue(copy);
            }}
            onChangeActive={(event, newHover) => {
                const copy = { ...props.value }
                copy.coping_strategies = newHover
                props.setHover(copy);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {props.value.coping_strategies !== null && (
            <Box sx={{ ml: 2 }}>{labels[props.hover.coping_strategies !== -1 ? props.hover.coping_strategies : props.value.coping_strategies]}</Box>
        )}

        <Divider variant="inset" />
        <h3>How productive was my day?</h3>
        <h4>Did I get everything finished I needed to, did I feel slow, or did you reach all of your goals for the day...</h4>

        <Rating className="rating"
            name="customized-10"
            defaultValue={5} max={10} required
            getLabelText={() => getLabelText(props.value.productivity)}
            onChange={(event, newValue) => {
                const copy = { ...props.value }
                copy.productivity = newValue
                props.setValue(copy);
            }}
            onChangeActive={(event, newHover) => {
                const copy = { ...props.value }
                copy.productivity = newHover
                props.setHover(copy);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {props.value.productivity !== null && (
            <Box sx={{ ml: 2 }}>{labels[props.hover.productivity !== -1 ? props.hover.productivity : props.value.productivity]}</Box>
        )}
    </div>
}