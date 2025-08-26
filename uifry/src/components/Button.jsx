
function Button({ text, className = "", url, onClick }) {
    return (
        <button onClick={onClick} className={`flex justify-center rounded items-center text-sm  ${className}`}>{text}  <img src={url} alt="" /></button>
    )
}

export default Button
