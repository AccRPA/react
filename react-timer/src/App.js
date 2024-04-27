import './App.css';
import {useState} from 'react';

function App() {
  const [timer, setTimer] = useState(currentDateString());
  const [stop, setStop] = useState(false);
  
  function startTimer(){ 
    if (!stop){
      setTimeout(updateTimer, 1000);
    }
  }
  
  function updateTimer(){
    setTimer(currentDateString());
  }
  
  function stopTimer(){
    setStop(true);
  }
  
  function continueTimer(){
    setStop(false);
    updateTimer();
  }

  function currentDateString(){
    return new Date().toLocaleTimeString();
  }
  
  startTimer();

  return (
    <section>
      <h1>{timer}</h1>
      <div className="button-group">
        <button onClick={stopTimer}>Stop</button>
        <button onClick={continueTimer}>Continue</button>
      </div>
    </section>    
  );
}

export default App;
