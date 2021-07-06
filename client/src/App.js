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
    //stops code if api does not return user
    if(data.error){
      console.log('error user not found')
      return
    }
    data.br.winPer = (data.br.wins / data.br.gamesPlayed *100).toFixed(2);
    data.br.kdRatio = (data.br.kdRatio).toFixed(2);
    if (!p1Bool) {
      await setP1DataState(data.br);
      await setp1User(user);
      setp1Bool(true);
    } else {
      await setP2DataState(data.br);
      await setp2User(user);
      setP2Bool(true);
    }
  }
  function closeP2() {
    setP2Bool(false);
    setP2DataState({});
    setp2User('');
  }
  async function closeP1() {
    if (p2Bool) {
      await setP1DataState(p2DataState);
      await setp1User(p2User);
      closeP2();
    } else {
      setp1Bool(false);
      setP1DataState({});
      setp1User('');
    }
  }

  return (
    <>
      <Header />
      <div id="main">
        {p1Bool && <PlayerStatsCard data={p1DataState} name={p1User} close={closeP1} />}
        {p2Bool && <PlayerStatsCard data={p2DataState} name={p2User} close={closeP2} />}
        {!p2Bool && <AddPlayerCard fetchUserStats={fetchUserStats} />}
        {p2Bool && <ComparisonCard p1Data={p1DataState} p2Data={p2DataState} />}
      </div>
    </>
  );
}


export default App;
