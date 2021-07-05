import React, { useState } from "react";
import Header from "./components/Header";
import AddPlayerCard from "./components/AddPlayerCard";
import PlayerStatsCard from "./components/PlayerStatsCard";
import ComparisonCard from "./components/ComparisonCard";
import "./css.css";
import API from "./util/API";

function App() {
  const [p1DataState, setP1DataState] = useState({});
  const [p1Bool, setp1Bool] = useState(false);
  const [p1User, setp1User] = useState('');
  const [p2DataState, setP2DataState] = useState({});
  const [p2Bool, setP2Bool] = useState(false);
  const [p2User, setp2User] = useState('');
  async function fetchUserStats(user, platform) {
    const data = await API.getPlayerStats(user, platform);
    if (!p1Bool) {
      await setP1DataState(data);
      await setp1User(user);
      setp1Bool(true);
    } else {
      await setP2DataState(data);
      await setp2User(user);
      setP2Bool(true);
    }
  }

  return (
    <>
      <Header />
      <div id="main">
        {p1Bool && <PlayerStatsCard data={p1DataState} name={p1User} />}
        {p2Bool && <PlayerStatsCard data={p2DataState} name={p2User} />}
        {!p2Bool && <AddPlayerCard fetchUserStats={fetchUserStats} />}
        {p2Bool && <ComparisonCard p1Data={p1DataState} p2Data={p2DataState} />}
      </div>
    </>
  );
}


export default App;
