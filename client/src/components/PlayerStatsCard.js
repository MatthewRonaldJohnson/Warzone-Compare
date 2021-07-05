import React from 'react'

function PlayerStatsCard({data, name, close}) {
    const {kdRatio, kills, deaths, wins, gamesPlayed} = data.br;
    const kd = kdRatio.toFixed(2)
    const winPer = (wins/gamesPlayed * 100).toFixed(2);
    return (
        <div className="playerStatsCard">
            <h1>{name}</h1>
            <p>kd: {kd}</p>
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
