import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { favorite, getTips, unfavorite } from "./TipsManager"
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UserContext } from "../../UserContext";
import { pink } from '@mui/material/colors';
import { IconButton } from "@mui/material";
import { getCurrentUser } from "../user/UserManager";
import { getMoods } from "../moods/MoodsManager"
import { TipSearchBar } from "./TipSearchBar"


export const TipList = () => {

    const { currentUser, setUser } = useContext(UserContext)
    const [tips, setTips] = useState([])
    const [moods, setMoods] = useState([])
    const history = useHistory()

    useEffect(() => {
        getMoods()
            .then(data => setMoods(data))
            .then(getTips)
            .then(data => setTips(data))
    }, [])

    const userFavorites = currentUser.favoritedtips
    return (
        <article className="tips">
            < TipSearchBar moods={moods} setTips={setTips} />
            <h2>Tip List:</h2>
            {
                tips.map(tip => {
                    const fave = userFavorites?.find(fave => fave.id === tip.id)
                    return <article key={`tip--${tip.id}`} className="tip">
                        { tip.public ? 
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
                            : null
                        }
                    </article>
                })
            }

        </article>
    )
}