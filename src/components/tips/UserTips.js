import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip'
import { deleteTip, getUserTips } from "./TipsManager";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from "@mui/material";
import "./UserTips.css"
import { Divider } from "@material-ui/core";

export const UserTipList = ({ userTips, setUserTips, moods }) => {
    const [open, setOpen] = useState(false);
    const history = useHistory()

    useEffect(() => {
        getUserTips().then(data => setUserTips(data))
    }, [])

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