import { Settings } from "../utils/settings"

export const getCheckIns = () => {
    return fetch(`${Settings.API}/checkin`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createCheckin = (checkin) => {
    return fetch(`${Settings.API}/checkin`, { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(checkin)
    })
}

export const getCheckInsByDays = (number) => {
    return fetch(`${Settings.API}/checkin?days=${number}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}