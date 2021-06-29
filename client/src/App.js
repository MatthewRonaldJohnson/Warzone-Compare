import React, {useState} from "react";
import Header from "./components/Header";
import AddPlayerCard from "./components/AddPlayerCard";
import "./css.css";
import API from "./util/API";

function App() {
  const [playerOneState, setPlayerOneState] = useState({});
  async function fetchUserStats(user, platform){
    const data = await API.getPlayerStats(user, platform);
    setPlayerOneState(data);
  }

  return (
    <>
      <Header />
      <div id="main">
        <AddPlayerCard fetchUserStats={fetchUserStats}/>
      </div>
    </>
  );
}


export default App;
