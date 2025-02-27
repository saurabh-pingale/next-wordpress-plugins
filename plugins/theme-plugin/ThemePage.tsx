import { useState, useEffect } from "react";

export default function ThemePage() {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        initializeTheme();
    }, []);

    const initializeTheme = () => {
        const savedTheme = getSavedTheme();
        setTheme(savedTheme);
    };

    const getSavedTheme = (): string => {
        return localStorage.getItem("theme") || "light";
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        saveTheme(newTheme);
    };

    const saveTheme = (newTheme: string) => {
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className={`container text-center py-5 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
            <h1>Theme Plugin</h1>
            <p className="lead">Current Theme: <strong>{theme}</strong></p>
            <button className="btn btn-outline-primary mt-3" onClick={toggleTheme}>
                Switch Theme
            </button>
        </div>
    );
}
