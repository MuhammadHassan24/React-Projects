import { useState } from "react";
import Button from "../components/Button";

function Header() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="relative">
            {/* Top Tagline */}
            <h1 className="py-2 bg-[#3C3679] text-center text-white sm:text-sm text-xs font-bold">
                This is an announcement tagline for you to insert
            </h1>

            {/* Main Header */}
            <div className="flex justify-between items-center py-5 lg:px-20 sm:px-8 px-3">
                <div className="flex items-center gap-20 text-[#201C44] text-sm font-[600]">
                    <img src="src/assets/logo (2).png" alt="Logo" />
                    <div className="gap-20 sm:flex hidden">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                    </div>
                </div>

                {/* Desktop Contact Button */}
                <Button
                    className="bg-[#FAE0E1] sm:p-3 rounded text-sm font-[600] sm:flex hidden"
                    text={"Contact Now"}
                />

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="bg-[#FAE0E1] p-2 rounded text-sm font-[600]"
                    >
                        <img src="src/assets/category.svg" alt="Menu" />
                    </button>
                </div>
            </div>

            {/* Drawer with transition */}
            <div className="relative z-40">
                {/* Backdrop */}
                {isDrawerOpen && (
                    <div
                        onClick={toggleDrawer}
                        className="fixed inset-0 bg-black/50 bg-opacity-40 z-30 transition-opacity"
                    />
                )}

                {/* Sliding Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 rounded-bl-2xl rounded-tl-2xl bg-white shadow-lg z-40 p-6 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-[#201C44]">Menu</h2>
                        <button onClick={toggleDrawer} className="text-2xl font-bold">&times;</button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a href="#" className="text-[#201C44] font-medium">Home</a>
                        <a href="#" className="text-[#201C44] font-medium">About</a>
                        <a href="#" className="text-[#201C44] font-medium">Pricing</a>
                        <a href="#" className="text-[#201C44] font-medium">Blog</a>
                        <Button className="bg-[#FAE0E1] py-2 rounded text-sm font-[600]" text={"Contact Now"} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
