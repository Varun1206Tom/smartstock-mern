import React from 'react'

const NavigationItem = ({ icon, label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
        active
          ? "bg-blue-500/20 text-blue-400"
          : "hover:bg-slate-800 text-slate-300"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}

export default NavigationItem