
import Divider from '@mui/material/Divider';
import { Chip } from "@mui/material";


export const FavoritedTipsList = ({ favorites }) => {

    return <>

        <div className="favorited-tips">
            <h2 className="authored-tips-title" >Favorite Tips</h2>
            < Divider variant="middle" />
            <ul>
                {
                    favorites?.map(fave => {
                        return <div key={`fave--${fave.id}`}>
                            <li key={`fave--${fave.id}`} className="tip-container"><Chip size="small"
                                color="primary"
                                variant="outlined"
                                label={fave.mood.mood}
                                className="chip">
                            </Chip>{fave.tip}</li>
                        </div>
                    })
                }
            </ul>
        </div>
    </>
}