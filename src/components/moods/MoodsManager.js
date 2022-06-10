import { Settings } from "../utils/settings"

export const getMoods = () => {
    return fetch(`${Settings.API}/moods`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}