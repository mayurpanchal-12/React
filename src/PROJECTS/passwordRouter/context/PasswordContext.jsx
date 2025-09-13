import { createContext, useContext, useState, useEffect, useCallback, useRef, useId } from "react";

const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passlength, setPasslength] = useState(() => {
    const saved = localStorage.getItem("passlength");
    return saved ? JSON.parse(saved) : 12;
  });
  const [char, setChar] = useState(() => {
    const saved = localStorage.getItem("char");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [num, setNum] = useState(() => {
    const saved = localStorage.getItem("num");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [currentPass, setCurrentPass] = useState("");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("passwordHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const passRef = useRef(null);
  const numerId = useId();
  const characterId = useId();

  // Save options & history to localStorage
  useEffect(() => localStorage.setItem("passlength", JSON.stringify(passlength)), [passlength]);
  useEffect(() => localStorage.setItem("char", JSON.stringify(char)), [char]);
  useEffect(() => localStorage.setItem("num", JSON.stringify(num)), [num]);
  useEffect(() => localStorage.setItem("passwordHistory", JSON.stringify(history)), [history]);

  // Generate password
  const generatePassword = useCallback(() => {
    if (!char && !num) return;

    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) charset += "0123456789";
    if (char) charset += "#$%^!@*()";

    let pass = "";
    for (let i = 0; i < passlength; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setCurrentPass(pass);
    setHistory(prev => [pass, ...prev].slice(0, 5));
  }, [passlength, char, num]);

  // Auto-generate password when options change
  useEffect(() => generatePassword(), [generatePassword]);

  // Copy function
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 101);
    navigator.clipboard.writeText(currentPass);
    alert("Copied ✅");
  }, [currentPass]);

  // Clear history
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("passwordHistory");
  };

  // Delete single password
  const deletePassword = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem("passwordHistory", JSON.stringify(newHistory));
  };

  // Strength
  const strength = (() => {
    let score = 0;
    if (passlength >= 8) score++;
    if (passlength >= 12) score++;
    if (num) score++;
    if (char) score++;
    if (score <= 1) return "Weak";
    if (score <= 3) return "Medium";
    return "Strong";
  })();

  return (
    <PasswordContext.Provider value={{
      passlength, setPasslength,
      char, setChar,
      num, setNum,
      currentPass,
      passRef,
      generatePassword,
      copyPassword,
      numerId, characterId,
      history,
      clearHistory,
      deletePassword,
      strength
    }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordContext);
