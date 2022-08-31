import Button from "@mui/material/Button"
import { Chip } from "@mui/material"
import { Link } from "react-router-dom"
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteJournal } from "./JournalManager";
import { DateTimeConverter } from "../utils/DateTimeConverter";

export const JournalList = ({ journals, setJournals }) => {
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [selectedJournal, setSelectedJournal] = useState(0)


    const handleClose = () => {
        setOpen(false);
    };
    return <article className="journal-list-container">

        <Button component={Link} to="/newjournal" variant="contained" size="small" id="journal-button" >
            New Journal
        </Button>

        <h2 className="authored-tips-title">Journal Entries</h2>

        < Divider variant="middle" />

        <div className="journals-container">
        {
            journals.map(
                journal => {
                    const date = DateTimeConverter(journal)
                    return <div key={journal.id} >
                        <IconButton onClick={() => {
                            setSelectedJournal(journal.id)
                            setOpen(true)
                        }}>
                            <DeleteForeverIcon />
                        </IconButton>
                        <IconButton onClick={() => {
                            history.push(`/editjournal/${journal.id}`)
                        }}>
                            <EditIcon />
                        </IconButton>
                        <Chip size="small"
                            color="primary"
                            variant="outlined"
                            label={journal.mood.mood}
                            className="chip">
                        </Chip>
                        <Link to={`/journals/${journal.id}`}>{journal.title}</Link>--{date}
                    </div>
                }
            ).reverse()
        }
        </div>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title">
            <DialogTitle id="alert-dialog-title">
                {"Permanently Delete Entry?"}
            </DialogTitle>

            <DialogContent>
            <h3>Delete Entry?</h3>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    onClick={
                        () =>
                            deleteJournal(selectedJournal)
                                .then(data=> setJournals(data))
                                .then(handleClose)
                    }>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    </article>

}