import AppButton from "./AppButton"

function Drawer({ onClose, IsDrawerOpen }) {
    return (
        <>
            {
                IsDrawerOpen && (
                    <div className="bg-black/50 w-full h-screen z-40 absolute top-0 left-0" />
                )
            }
            <div className={`z-50 transform transition-transform duration-300 fixed left-0 top-0 h-full w-72 flex justify-center items-center bg-slate-200 dark:bg-slate-800 shadow-lg border-2 rounded-r-2xl rounded-br-2xl ease-in-out ${IsDrawerOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
                <AppButton text={"Close"} onClick={onClose} />
            </div>
        </ >
    )
}

export default Drawer
