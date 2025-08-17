import { useState, useEffect } from "react";

function Project() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [timer, setTimer] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  // ✅ Joke Fetcher
  const getJoke = async () => {
    const data = await fetch("https://official-joke-api.appspot.com/random_joke");
    const response = await data.json();
    setJoke({ setup: response.setup, punchline: response.punchline });
  };
  useEffect(()=>{
     if(!isRunning) return; // If timer is not running, exit
     const id = setInterval(() => {
       setTimer((prev) => {
         if (prev === 1) {
           clearInterval(id);
           setIsRunning(false);
           getJoke();
           return 0;
         }
         return prev - 1;
       });
     }, 1000);
     return () => clearInterval(id); // Cleanup interval on unmount or when isRunning changes
  }, [isRunning]);

  // ✅ Start Timer
  const startTimer = () => {
    if (isRunning) return;
    setTimer(10); // reset to 10
    setIsRunning(true);
    setJoke({ setup: "", punchline: "" });
  };
   const resetTimer = () => {
    setIsRunning(false);
    setTimer(10);
    setJoke({ setup: "", punchline: "" });
  };
return (
    <div>
      {joke.setup && (
        <>
          <h1>{joke.setup}</h1>
          <h2>{joke.punchline}</h2>
        </>
      )}

      <h1>{timer}</h1>

      {timer > 0 ? (
        <button onClick={startTimer}>Start Timer</button>
      ) : (
        <div>
          <h2>Time's up!</h2>
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      )}
    </div>
  );
}

export default Project;
