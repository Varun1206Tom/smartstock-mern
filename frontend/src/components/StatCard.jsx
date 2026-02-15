import React from 'react'
import { motion } from "framer-motion";

const StatCard = ({ title, value, danger }) => {
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.03 }}
                className={`p-5 rounded-2xl border ${danger
                        ? "border-red-500/30 bg-red-500/10"
                        : "border-slate-800 bg-slate-900"
                    }`}
            >
                <p className="text-slate-400 text-sm">{title}</p>
                <h3 className="text-2xl font-bold mt-2">{value}</h3>
            </motion.div>
        </div>
    )
}

export default StatCard