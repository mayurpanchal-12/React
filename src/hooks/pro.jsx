import { useState } from "react";

function Pro() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" }); //joke
  const [timer, setTimer] = useState(10); //timer 
  const [isRunning, setIsRunning] = useState(false); //timer on, off

  const getJoke = async () => { // fetching api and all 
    let data = await fetch("https://official-joke-api.appspot.com/random_joke");
    let response = await data.json();

    setJoke({
      setup: response.setup,
      punchline: response.punchline,
    });
  };

  const startTimer = () => {
    if (isRunning) return; //if timer on then exit from this fn or

    setIsRunning(true); // make it runnig 
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(id); // if timer is 1 then clear and
          setIsRunning(false);// timer close
          getJoke(); // getting joke 
          return 0; // making timer 0 
        }
        return prev - 1; // else goes from 10 to 1
      });
    }, 1000);
  };

  const resetTimer = () => {
    setTimer(10); // set timer 10 andclose it
    setIsRunning(false);
    setJoke({ setup: "", punchline: "" }); // reset joke
  };

  return (
    <div>
      {joke.setup && ( // if joke is present then show it
        <>
          <h1>{joke.setup}</h1>
          <h2>{joke.punchline}</h2>
        </>
      )}

      <h1>{timer}</h1>

      {timer > 0 ? ( // if timer is greater than 0 then show start button
        <button onClick={startTimer}>Start Timer</button> // start timer 
      ) : (// if timer is 0 then show reset button
        <div>
          <h2>Time's up!</h2>
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      )}
    </div>
  );
}

export default Pro;
