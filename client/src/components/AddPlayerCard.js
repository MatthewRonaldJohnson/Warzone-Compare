import React, {useState} from 'react'

function AddPlayerCard(props) {
    const [userIDInputState, setIDInputState] = useState();
    const [platformState, setPlatformState] = useState("battle");
    const handleUserIDChange = function(e){
        setIDInputState(e.target.value);
    }
    const handlePlatformChange = function(e){
        setPlatformState(e.target.value);
    }
    const handleFormSubmit = function(e){
        e.preventDefault();
        props.fetchUserStats(userIDInputState, platformState);
    }
    return (
        <form id="addPlayerCard" onSubmit={handleFormSubmit}>
            <label htmlFor="userID">userID</label>
            <input type="text" id="userID" placeholder="ex. Sweetflying#1559" onChange={handleUserIDChange} />
            <label htmlFor="platform">Platform</label>
            <select id="platform" onChange={handlePlatformChange}>
                <option value="battle">BattleNET</option>
                <option value="psn">Playstation</option>
                <option value="xbl">Xbox</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddPlayerCard
