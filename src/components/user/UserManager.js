import { Settings } from "../utils/settings"

export const getCurrentUser = () => {
    return fetch(`${Settings.API}/currentuser`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

