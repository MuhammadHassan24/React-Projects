import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="flex justify-center gap-10 text-2xl font-bold">
                <h1>This Is Header</h1>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >


                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-red-500" : "text-gray-500"}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-red-500" : "text-gray-500"}`
                        }
                    >
                        About
                    </NavLink>


                </div>
            </header>
        </>
    )
}

