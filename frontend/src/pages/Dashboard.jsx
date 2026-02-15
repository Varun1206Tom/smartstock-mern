import React from 'react'
import StatCard from '../components/StatCard'

const Dashboard = () => {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold">Dashboard</h2>
                <p className="text-slate-400">Inventory Overview</p>
            </div>

            <div className="grid grid-cols-3 gap-5">
                <StatCard title="Total Products" value="124" />
                <StatCard title="Low Stock" value="8" danger />
                <StatCard title="Today Sales" value="₹ 12,540" />
            </div>

        </div>
    )
}

export default Dashboard