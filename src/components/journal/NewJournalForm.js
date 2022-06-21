import { Box } from "@material-ui/core"
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getMoods } from "../moods/MoodsManager";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { createJournalEntry, editJournalEntry, getSingleJournal } from "./JournalManager";


// NewJournalForm is used for new journal and edit journal views depending on props
export const NewJournal = ({ editMode }) => {
    const history = useHistory()
    const { journalId } = useParams()
    const [userJournal, setUserJournal] = useState({})
    const [moods, setMoods] = useState([])
    const [selectedMood, setSelectedMood] = useState(0)
    const [form, setForm] = useState({
        title: "",
        content: ""
    })
    // useLocation to import state and set editMode to true

    useEffect(() => {
        getMoods()
            .then(data => setMoods(data))
    }, [])


    if (editMode) {
        if (!userJournal.id) {
            getSingleJournal(journalId)
                .then(data => {
                    setUserJournal(data)
                    setSelectedMood(data.mood.id)
                })
        }
    }

    const handleChange = (event) => {
        if (event.target.id === "title") {
            if (!editMode) {
                const copy = { ...form }
                copy.title = event.target.value
                setForm(copy)
            } else {
                const copy = { ...userJournal }
                copy.title = event.target.value
                setUserJournal(copy)
            }
        } else if (event.target.id === "content") {
            if (!editMode) {
                const copy = { ...form }
                copy.content = event.target.value
                setForm(copy)
            } else {
                const copy = { ...userJournal }
                copy.content = event.target.value
                setUserJournal(copy)
            }
        }
    }

        const handleMoodChange = (event) => {
            setSelectedMood(event.target.value)
        }

        const handleSend = () => {
            if (!editMode) {
                const newJournal = {
                    title: form.title,
                    content: form.content,
                    mood: parseInt(selectedMood)
                }
                createJournalEntry(newJournal)
                    .then(history.push('/'))
            } else if (editMode) {
                const journal = {
                    id: userJournal.id,
                    date: userJournal.date,
                    title: userJournal.title,
                    content: userJournal.content,
                    mood: parseInt(selectedMood)
                }
                editJournalEntry(journal)
                    .then(history.push('/'))
            }
        }

        // styling for input form using MUI components
        const useStyles = makeStyles({
            input: {
                color: "white"
            }
        });
        const classes = useStyles();

        return <Box
            className="new-journal-container"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off">
            <div id="new-journal-entry">
                <FormControl>
                    <TextField
                        id="title"
                        inputProps={{ className: classes.input }}
                        label="Title"
                        multiline
                        required
                        maxRows={4}
                        value={editMode ? userJournal.title : form.title}
                        onChange={handleChange}
                        variant="filled" />
                    <TextField
                        id="content"
                        label="Journal Entry"
                        inputProps={{ className: classes.input }}
                        multiline
                        required
                        value={editMode ? userJournal.content : form.content}
                        rows={8}
                        onChange={handleChange}
                        variant="filled" />
                    <RadioGroup
                        row required
                        id="moods"
                        name="moods"
                        onClick={handleMoodChange}
                        value={selectedMood} >
                        {
                            moods.map(
                                mood =>
                                    <FormControlLabel key={`mood--${mood.id}`}value={mood.id} control={<Radio />} label={mood.mood} />
                            )
                        }
                    </RadioGroup>
                    <div className="journal-buttons">
                        <Stack direction="row" spacing={8}>
                            <Button variant="outlined" onClick={() => history.push('/')}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={handleSend} endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </div>
                </FormControl>
            </div>

        </Box>
    }