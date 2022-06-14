import { getUserJournals } from "../user/UserManager"
import { Settings } from "../utils/settings"

export const getSingleJournal = (id) => {
    return fetch(`${Settings.API}/journals/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}
export const deleteJournal = (id) => {
    return fetch(`${Settings.API}/journals/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(getUserJournals)
}

export const createJournalEntry = (entry) => {
    return fetch(`${Settings.API}/journals`, { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}
export const editJournalEntry = (entry) => {
    return fetch(`${Settings.API}/journals/${entry.id}`, { 
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}