import { Chip, Divider } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getSingleJournal } from "./JournalManager"
import "./Journal.css"

export const JournalDetail = () => {
    const [journal, setJournal] = useState({})
    const { journalId } = useParams()

    useEffect(() => {
        getSingleJournal(journalId)
            .then(data => setJournal(data))
    }, [])


    return <article className="journal-detail-container">
        < Divider variant="middle" />
        <div className="journal-detail-title">
            <Chip size="small"
                color="primary"
                variant="outlined"
                label={journal.mood?.mood}
                className="chip">
            </Chip>
            <h1>"{journal.title}" </h1>
            --{journal.date}
        </div>
        <p className="journal-content">
            {journal.content}
        </p>
    </article>
}