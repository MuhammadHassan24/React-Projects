import React from 'react'

function ServiceBox({ svgUrl, title, className, textWidth }) {
    return (
        <div className={`max-w-64 h-48 overflow-hidden rounded-[6px] ${className} `}>
            <div className="bg-[#5380EA] h-3 "></div>
            <div className={`px-3 py-4 space-y-3 relative  w-full `}><img src={svgUrl} alt="" />
                <h1 className={`text-lg max-w-${textWidth}`}>{title}</h1>
                <div className={`size-10 flex justify-center items-center bg-[#5380EA] absolute right-3`}>
                    <img src="src/assets/fluent--arrow-turn-right-48-filled.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServiceBox
