
function ExpreienceBox({ imageUrl, title, count, className }) {
    return (
        <div className={`flex flex-col items-center gap-2   ${className}`}>
            <img className="size-12" src={imageUrl} alt="" />
            <h1 className="font-bold text-[#0F172A] text-xl mt-4">{title}</h1>
            <p className="text-sm">{count}</p>
        </div>
    )
}

export default ExpreienceBox
