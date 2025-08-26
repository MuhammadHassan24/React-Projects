function RowBox({ iconUrl, text, className = "", bgColor }) {
    return (
        <div className={`flex items-center lg:gap-5 gap-3 `}>
            <div className={`lg:p-3 p-2 bg-[${bgColor}] rounded`}>
                <img className="lg:size-auto size-5" src={iconUrl} alt="" />
            </div>
            <h1 className={`lg:text-base text-sm ${className}`}>{text}</h1>
        </div>
    )
}

export default RowBox
