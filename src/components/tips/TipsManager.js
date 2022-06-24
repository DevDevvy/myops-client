import { Settings } from "../utils/settings"

// gets all public tips
export const getTips = () => {
    return fetch(`${Settings.API}/tips`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}
// gets all tips specific to user
export const getUserTips = (id) => {
    return fetch(`${Settings.API}/tips?user_id=${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}
export const getSingleTip = (id) => {
    return fetch(`${Settings.API}/tips/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createTip = (tip) => {
    return fetch(`${Settings.API}/tips`, { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tip)
    })
        .then(getTips)
}

export const editTip = (tip) => {
    return fetch(`${Settings.API}/tips/${tip.id}`, { 
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tip)
    })
}


export const deleteTip = (tipId, userId) => {
    return fetch(`${Settings.API}/tips/${tipId}`, { 
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
    })
}

export const favorite = (id) => {
    return fetch(`${Settings.API}/tips/${id}/favorite`, { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        
    })
}
export const unfavorite = (id) => {
    return fetch(`${Settings.API}/tips/${id}/unfavorite`, { 
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
    })
}

// gets all tips associated with a certain mood
export const getTipsByMood = (id) => {
    return fetch(`${Settings.API}/tips?mood=${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}