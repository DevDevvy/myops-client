import React from "react"
import { Route } from "react-router-dom"
import { CheckInForm } from "./checkin/CheckInForm"
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
        </main>
    </>
}
