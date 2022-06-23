import Chip from '@mui/material/Chip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteTip } from "./TipsManager";
import { Divider } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom"
import "./UserTips.css"

export const UserTipList = ({ userTips, setUserTips }) => {
    const history = useHistory()

    return (
        <article className="tips">
            <h2 className="authored-tips-title">Authored Tips:</h2>
            < Divider variant="middle"/>
                {
                    userTips?.map(tip => {
                        return <article key={`tip--${tip.id}`} className="tip">
                            <div className="tip-container">
                                <IconButton onClick={()=> 
                                deleteTip(tip.id).then(data=> setUserTips(data))
                                }>
                                <DeleteForeverIcon/>
                                </IconButton>
                                <IconButton onClick={() => {
                                    history.push(`/tipedit/${tip.id}`)
                                    }}>
                                    <EditIcon />
                                </IconButton>
                                <Chip size="small"
                                    color="primary"
                                    variant="outlined"
                                    label={tip.mood.mood}
                                    className="chip">
                                </Chip>
                                {tip.tip}
                            </div>
                        </article>
                    })
                }
        </article>
    )
}