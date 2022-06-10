
import { Chip } from "@mui/material";


export const FavoritedTipsList = ({ favorites }) => {

    return <>

        <div className="favorited-tips">
            <h2>Favorite Tips</h2>
            <ul>
                {
                    favorites?.map(fave => {
                        return <>
                            <li className="tip-container"><Chip size="small"
                                color="primary"
                                variant="outlined"
                                label={fave.mood.mood}
                                className="chip">
                            </Chip>{fave.tip}</li>
                        </>
                    })
                }
            </ul>
        </div>
    </>
}