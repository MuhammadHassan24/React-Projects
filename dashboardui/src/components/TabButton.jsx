import React from 'react'

function TabButton({ label, isActive, onClick }) {
    return (
        <button onClick={onClick} className={`flex justify-center transition-colors duration-200 items-center p-2 rounded ${isActive ? "bg-black text-white" : "bg-gray-500 text-gray-700"}`}>
            {label}
        </button>
    )
}

export default TabButton
