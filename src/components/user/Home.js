import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserTipList } from "../tips/UserTips"
import { UserContext } from "../../UserContext";
import { NewTipForm } from "../tips/NewTipForm";
import "./Home.css"
import { FavoritedTipsList } from "../tips/FavoritedTipsList";
import { Button } from "@mui/material";
import { getMoods } from "../moods/MoodsManager";
import { LineChart } from "../charts/LineChart.tsx";
import { getCheckIns } from "../checkin/CheckInManager";
import { PieChart } from "../charts/PieChart.tsx";

export const Home = () => {
    const { currentUser } = useContext(UserContext)
    const [userTips, setUserTips] = useState([])
    const favorites = currentUser.favoritedtips
    const [moods, setMoods] = useState([])
    const [checkins, setCheckins] = useState([])

    useEffect(() => {
        getMoods().then(data => setMoods(data))
            .then(getCheckIns).then(data => setCheckins(data))
    }, [])

    return (
        <main className="home">
            <h1 className="app-name">MyOps Personal Tracker</h1>
            <h3 className="app-name">Take A Deep Breath...</h3>
            <article className="charts-container">
                <div id="pie-chart">
                    <PieChart checkins={checkins} />
                </div>
                <div  id="line-chart">
                    <LineChart checkins={checkins} />
                </div>
            </article>
            <div id="checkin">
                <Button component={Link} to="/checkin" size="large" color="success" variant="contained">CHECK IN</Button>
            </div>
            <div className="user-tips-list">
                <FavoritedTipsList favorites={favorites} />
                <aside className="user-tips">
                    < NewTipForm setUserTips={setUserTips} currentUser={currentUser} moods={moods} setMoods={setMoods} />
                    < UserTipList currentUser={currentUser} userTips={userTips} setUserTips={setUserTips} moods={moods} />
                </aside>
            </div>
        </main>
    )
}