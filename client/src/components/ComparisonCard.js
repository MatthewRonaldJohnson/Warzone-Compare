import React from 'react'
import ComparisonSection from './comparisonSection';

function ComparisonCard({p1Data, p2Data}) {
    const kdDif = p1Data.kdRatio - p2Data.kdRatio;
    const killDif = p1Data.kills - p2Data.kills;
    const deathsDif = p1Data.deaths - p2Data.deaths;
    const winPerDif = p1Data.winPer - p2Data.winPer;
    const winsDif = p1Data.wins - p2Data.wins;
    const gamesPlayedDif = p1Data.gamesPlayed - p2Data.gamesPlayed;

    return (
        <div>
            <ComparisonSection stat={kdDif} name='KD'/>
            <ComparisonSection stat={killDif} name='Kills'/>
            <ComparisonSection stat={deathsDif} name='Deaths'/>
            <ComparisonSection stat={winPerDif} name='Win %'/>
            <ComparisonSection stat={winsDif} name='Wins'/>
            <ComparisonSection stat={gamesPlayedDif} name='Games Played'/>
        </div>
    )
}

export default ComparisonCard
