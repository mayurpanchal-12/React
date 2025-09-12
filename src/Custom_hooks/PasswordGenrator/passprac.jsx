import usePasswordlogic from "./passwordgen";

function Pass() {
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
  } = usePasswordlogic();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          🔑 Password Generator
        </h1>

        {/* Password Display */}
        <div className="bg-amber-300 h-14 flex items-center justify-between px-3 rounded-md mb-6">
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

        {/* Length Slider */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password Length:{" "}
            <span className="text-amber-600">{passlength}</span>
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
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={num}
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
              defaultChecked={char}
              id={characterId}
              onChange={() => setchar((prev) => !prev)}
              className="h-4 w-4 text-amber-600"
            />
            <label htmlFor={characterId} className="text-gray-700">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pass;
