import React from 'react'

function StatCard({ title, value, color, stat }) {
    return (
        <div className={`stat-card ${color}`}>
            <p>{title}</p>
            <h2>{value}</h2>
            <p>{stat}</p>
        </div>
    )
}

export default StatCard;