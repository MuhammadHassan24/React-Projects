import { useTheme } from "next-themes"
function ThemeButton() {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div >
            <button
                className="py-5 border-blue-300 dark:border-blue-700 border2 rounded-lg"
                onClick={toggleTheme}  >{theme === "light" ? "☀️" : "🌑"}</button>
        </div>
    )
}

export default ThemeButton
