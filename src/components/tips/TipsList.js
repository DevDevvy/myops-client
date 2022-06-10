import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { favorite, getTips, unfavorite } from "./TipsManager"
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UserContext } from "../../UserContext";
import { pink } from '@mui/material/colors';
import { IconButton } from "@mui/material";
import { getCurrentUser } from "../user/UserManager";


export const TipList = () => {

    const { currentUser, setUser } = useContext(UserContext)
    const [tips, setTips] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTips().then(data => setTips(data))
    }, [])



    const userFavorites = currentUser.favoritedtips
    return (
        <article className="tips">
            <h2>Tip List:</h2>
            {
                tips.map(tip => {
                    const fave = userFavorites?.find(fave => fave.id === tip.id)
                    return <article key={`tip--${tip.id}`} className="tip">
                        <Stack direction="column">
                            <div className="tip-container">
                                {
                                    fave ?
                                        <IconButton onClick={() =>
                                            unfavorite(tip.id)
                                                .then(getCurrentUser)
                                                .then(data => setUser(data))
                                        } >
                                            <FavoriteIcon
                                                sx={{ color: pink[500] }} />
                                        </IconButton>
                                        :
                                        <IconButton onClick={() =>
                                            favorite(tip.id)
                                                .then(getCurrentUser)
                                                .then(data => setUser(data))
                                        }>
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                }
                                <Chip size="small"
                                    color="primary"
                                    variant="outlined"
                                    label={tip.mood.mood}
                                    className="chip">
                                </Chip>
                                {tip.tip}
                            </div>
                        </Stack>
                    </article>
                })
            }

        </article>
    )
}