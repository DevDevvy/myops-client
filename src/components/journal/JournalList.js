import { Button } from "@material-ui/core"
import { Chip } from "@mui/material"
import { Link } from "react-router-dom"
 export const JournalList = ({ journals }) => {
    return <article className="journal-list-container">

        <Button component={Link} to="/newjournal" className="new-tip-button" variant="contained" size="small" >
            New Journal
        </Button>
        {
            journals.map(
                journal => {
                    return <div key={journal.id}>
                        <Chip size="small"
                            color="primary"
                            variant="outlined"
                            label={journal.mood.mood}
                            className="chip">
                        </Chip>
                        <Link to={`/journals/${journal.id}`}>{journal.title}</Link>--{journal.date}
                    </div>
                }
            )
        }
    </article>
}