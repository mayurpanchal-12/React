import { useState, useCallback, useEffect, useRef, useId } from "react";

function usePasswordlogic() {
  const [passlength, setpasslength] = useState(8);
  const [char, setchar] = useState(false);
  const [num, setnum] = useState(false);
  const [cuurentpass, setcurrentpass] = useState("");
  const [history, setHistory] = useState([]);

  // Generate password
  const passgen = useCallback(() => {
    let generatedpass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) string += "0123456789";
    if (char) string += "#$%^!@*()";

    for (let i = 0; i < passlength; i++) {
      let randomcharacter = Math.floor(Math.random() * string.length);
      generatedpass += string.charAt(randomcharacter);
    }

    setcurrentpass(generatedpass);

    // Update history (keep last 5)
    setHistory((prev) => [generatedpass, ...prev].slice(0, 5));
  }, [passlength, num, char]);

  // Run password generator when options change
  useEffect(() => {
    passgen();
  }, [passlength, num, char]);

  // Refs and copy functions
  const passref = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(cuurentpass);
  }, [cuurentpass]);

  const numerId = useId();
  const characterId = useId();

  // Load history from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("passwordHistory"));
    if (saved && Array.isArray(saved)) setHistory(saved);
  }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("passwordHistory", JSON.stringify(history));
  }, [history]);

  // Clear history
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("passwordHistory");
  };

  // Password strength
  const strength = (() => {
    let score = 0;
    if (passlength >= 8) score++;
    if (passlength >= 12) score++;
    if (num) score++;
    if (char) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    return "Strong";
  })();

  return {
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
  };
}

export default usePasswordlogic;
