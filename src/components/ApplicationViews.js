import React from "react"
import { Route } from "react-router-dom"
import { CheckInForm } from "./checkin/CheckInForm"
import { JournalDetail } from "./journal/JournalDetail"
import { NewJournal } from "./journal/NewJournalForm"
import { EditTip } from "./tips/EditTip"
import { TipList } from "./tips/TipsList"
import { Home } from "./user/Home"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/tips">
                <TipList />
            </Route>
            <Route exact path="/checkin">
                < CheckInForm />
            </Route>
            <Route exact path="/tipedit/:tipId(\d+)">
                < EditTip />
            </Route>
            <Route exact path="/journals/:journalId(\d+)">
                < JournalDetail />
            </Route>
            <Route exact path="/newjournal">
                < NewJournal editMode={false}/>
            </Route>
            <Route exact path="/editjournal/:journalId(\d+)">
                < NewJournal editMode={true} />
            </Route>
        </main>
    </>
}
