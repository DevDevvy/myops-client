import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserTipList } from "../tips/UserTips"
import { UserContext } from "../../UserContext";
import { NewTipForm } from "../tips/NewTipForm";
import "./Home.css"
import { FavoritedTipsList } from "../tips/FavoritedTipsList";
import Button from "@mui/material/Button"
import { getMoods } from "../moods/MoodsManager";
import { LineChart } from "../charts/LineChart.tsx";
import { getCheckIns } from "../checkin/CheckInManager";
import { PieChart } from "../charts/PieChart.tsx";
import Divider from '@mui/material/Divider';
import { JournalList } from "../journal/JournalList";
import { getUserJournals } from "./UserManager";
import { CheckInSearchBar } from "../checkin/CheckInSearchBar";
import { Alert } from "@mui/material";

export const Home = () => {
    const { currentUser } = useContext(UserContext)
    const [userTips, setUserTips] = useState([])
    const favorites = currentUser.favoritedtips
    const [moods, setMoods] = useState([])
    const [checkins, setCheckins] = useState([])
    const [journals, setJournals] = useState([])

    useEffect(() => {
        getCheckIns().then(data => setCheckins(data))
            .then(getMoods).then(data => setMoods(data))
            .then(getUserJournals).then(data => setJournals(data))
    }, [])

    return (
        <main className="home">
            {/* logo */}
            <img src="/logo.svg" alt="MyOps App Logo" height={120} />
            <h1 className="app-name">
                Personal Tracker
            </h1>

            < Divider variant="middle" />

            <h3 className="app-name">
                Take A Deep Breath...
            </h3>
            <div className="searchbar">
                {/* drop down search filters by length of time for chart views*/}
                <CheckInSearchBar id="checkin-dropdown"
                    checkins={checkins}
                    setCheckins={setCheckins} />
            </div>
            {/* charts in typescript are both fed same data */}
            <article className="charts-container">
                <div id="line-chart">
                    < LineChart checkins={checkins} />
                </div>
                <div id="pie-chart">
                    < PieChart checkins={checkins} />
                </div>
            </article>
            {/* error message if no data is present */}
            {
                checkins.length < 1
                    ? <Alert severity="error" id="data-warning"
                    > No data to show- start tracking your ops:
                        <Link to='/checkin'>CHECK IN</Link>
                    </Alert>
                    : ""
            }
            < Divider variant="middle" />

            <div id="checkin">
                <Button component={Link}
                    to="/checkin"
                    size="large"
                    color="success"
                    variant="contained"
                    id="checkin">
                    CHECK IN
                </Button>
            </div>
            {/* contains homepage: authored tips, favorited tips, and personal journals */}
            <div className="user-tips-list">
                < JournalList journals={journals}
                    setJournals={setJournals} />
                < FavoritedTipsList favorites={favorites} />
                <div className="user-tips">
                    < NewTipForm setUserTips={setUserTips}
                        currentUser={currentUser}
                        moods={moods}
                        setMoods={setMoods} />
                    < UserTipList currentUser={currentUser}
                        userTips={userTips}
                        setUserTips={setUserTips}
                        moods={moods} />
                </div>
            </div>
        </main>
    )
}