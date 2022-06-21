import { Chip, Divider } from "@mui/material"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getSingleJournal } from "./JournalManager"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "./Journal.css"
import { Button } from "@material-ui/core";

export const JournalDetail = () => {
    const [journal, setJournal] = useState({})
    const { journalId } = useParams()
    const history = useHistory()
    useEffect(() => {
        getSingleJournal(journalId)
            .then(data => setJournal(data))
    }, [])


    return <article className="journal-detail-container">
        < Divider variant="middle" />
        <Box sx={{ width: '70%' }}>
            <Card variant='outlined'>
                <div className="journal-detail-title">
                    <Chip size="small"
                        color="primary"
                        variant="outlined"
                        label={journal.mood?.mood}
                        className="chip">
                    </Chip>
                    <h1>"{journal.title}" </h1> --{journal.date}
                </div>
                {/* body of journal */}
                <p className="journal-content">
                    {journal.content}
                </p>
            </Card>
            <div id="back-button">
                <Button id="back" variant="contained" onClick={() => history.push('/')} >Back</Button>
            </div>
        </Box>
    </article>
}