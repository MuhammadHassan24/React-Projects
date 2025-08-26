
function Button({ text, className = "" }) {
    return (
        <button className={`${className} w-28 py-2 px-3  rounded-3xl text-white text-sm font-semibold `} >{text}</button>
    )
}

export default Button
