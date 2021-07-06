import React from 'react'

function PlayerStatsCard({data, name, close}) {
    const {kdRatio, kills, deaths, wins, gamesPlayed, winPer} = data;
    return (
        <div className="playerStatsCard">
            <h1>{name}</h1>
            <p>kd: {kdRatio}</p>
            <p>Kills: {kills}</p>
            <p>Deaths: {deaths}</p>
            <p>Win %: {winPer}</p>
            <p>Wins: {wins}</p>
            <p>Games Played: {gamesPlayed}</p>
            <button className="removePlayerBtn" onClick={close}>X</button>
        </div>
    )
}

export default PlayerStatsCard
