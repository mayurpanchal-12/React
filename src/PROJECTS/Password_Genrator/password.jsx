import usePasswordlogic from "./usePasswordLogic";
function PasswordGenerator() {
  const {
    passlength,
    setpasslength,
    char,
    setchar,
    num,
    setnum,
    cuurentpass,
    passref,
    copyPasswordToClipboard,
    numerId,
    characterId,
    history,
    strength,
    clearHistory,
  } = usePasswordlogic();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
  };

  const getColor = () => {
    if (strength === "Weak") return "bg-red-500";
    if (strength === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          🔑 Password Generator
        </h1>

        {/* Current Password Display */}
        <div className="bg-amber-300 flex flex-col px-3 rounded-md mb-4">
          <div className="flex items-center justify-between h-14">
            <input
              type="text"
              readOnly
              value={cuurentpass}
              ref={passref}
              placeholder="Generated password"
              className="flex-1 mr-2 px-3 py-2 rounded-md bg-amber-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          {/* Strength Badge */}
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-white text-xs px-2 py-1 rounded ${getColor()}`}>
              Strength: {strength}
            </span>
          </div>
        </div>

        {/* Length Slider */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password Length: <span className="text-amber-600">{passlength}</span>
          </label>
          <input
            type="range"
            min={3}
            max={100}
            value={passlength}
            onChange={(e) => setpasslength(Number(e.target.value))}
            className="w-full cursor-pointer accent-amber-600"
          />
        </div>

        {/* Options */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={num}
              id={numerId}
              onChange={() => setnum((prev) => !prev)}
              className="h-4 w-4 text-amber-600"
            />
            <label htmlFor={numerId} className="text-gray-700">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={char}
              id={characterId}
              onChange={() => setchar((prev) => !prev)}
              className="h-4 w-4 text-amber-600"
            />
            <label htmlFor={characterId} className="text-gray-700">
              Include Special Characters
            </label>
          </div>
        </div>

        {/* Password History */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">Recent Passwords</h2>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Clear History
              </button>
            )}
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {history.length === 0 ? (
              <li className="text-gray-500">No history yet</li>
            ) : (
              history.map((pass, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center px-2 py-1 bg-amber-100 rounded-md"
                >
                  <span className="truncate">{pass}</span>
                  <button
                    onClick={() => handleCopy(pass)}
                    className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Copy
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
