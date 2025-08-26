import { useState } from 'react'

function Accordion({ query, anwser }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => setIsActive(!isActive)} className={`sm:h-20 h-24 w-full flex flex-col  justify-center rounded  ${isActive ? "bg-[#3C3679]" : "bg-transparent border-2"}`}>
                <div className={`flex justify-between items-center sm:text-bas sm:px-14 px-5 ${isActive ? "text-white" : "text-black"} `}><h1>{query}</h1>
                    <div className='font-bold'>{isActive ? "-" : "+"}</div>
                </div>

            </div>
            {isActive && <div className='sm:px-14 px-5 py-3 space-y-5'><h1>{anwser} </h1>
                <h1>{anwser}</h1>
            </div>}
        </>

    )
}

export default Accordion
