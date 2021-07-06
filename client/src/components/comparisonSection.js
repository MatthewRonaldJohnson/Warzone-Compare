import React from 'react'

function ComparisonSection({stat, name}) {
    const comparison = stat >=0? 'positive':'negative';
    return (
        <div>
            <p className={comparison}>{name}: {stat}</p>
        </div>
    )
}

export default ComparisonSection
