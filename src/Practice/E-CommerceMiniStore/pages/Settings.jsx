import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Toggle Theme
      </button>
    </div>
  );
}
