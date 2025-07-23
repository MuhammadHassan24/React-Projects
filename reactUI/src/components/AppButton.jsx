
function AppButton({ text, onClick }) {
    return (
        <button onClick={onClick} className='border px-4 py-2 rounded-lg text-black dark:text-white'>{text}</button>
    )
}

export default AppButton
