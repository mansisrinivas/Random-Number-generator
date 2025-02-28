import React, { useState} from "react";
import './App.css';

function App(){
  const [randomNumber, setRandomNumber]=useState(null);
  //setRandomNumber(0); is a function to update the value of randomNumber

  //generateRandomNumber is a function to generate a random number between 1 and 100
  const generateRandomNumber = () => {
    //math.random() generates a floating point nu ber between 0 and 1(exclusive) and adding 1 will make the range from 0-99 to 0-100
    //math.floor helps to round off the number
    const number= Math.floor(Math.random() * 100 ) +1;
    setRandomNumber(number);
  };
  return(
    <div className="App">
      <h1> Random Number Generator  🎲 </h1>
      <p>{randomNumber !== null?  `Generated Number: ${randomNumber}` : 'Click the button to generate a random number' }</p>
      <button onClick={generateRandomNumber}>Generate Number</button>
    </div>
  );
}

export default App;