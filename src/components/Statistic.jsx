import React from 'react'
import StatCard from './StatCard'
function Statistic() {
    return (
        <div className="statistic">
            <StatCard
                title="Total Students"
                value={30}
                color="blue"
                stat={30}
            />
            <StatCard
                title="Total Students"
                value={30}
                color="pink"
                stat={30}
            />
            <StatCard
                title="Total Students"
                value={30}
                color="red"
                stat={30}
            />
            <StatCard
                title="Total Students"
                value={30}
                color="green"
                stat={30}
            />
        </div>
    )
}

export default Statistic