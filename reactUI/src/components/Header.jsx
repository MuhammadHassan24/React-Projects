import ThemeButton from './ThemeButton'

function Header() {
    return (
        <div className=' flex justify-between items-center px-10  dark:bg-slate-700 bg-slate-300 w-full'>
            <h1 className='text-2xl dark:text-white text-black font-bold'>Components</h1>
            <ThemeButton />
        </div>
    )
}

export default Header
