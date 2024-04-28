import './App.css';
import {useState, useRef} from 'react';

function App() {
  const [timer, setTimer] = useState(currentDateString());
  const stop = useRef(false);
  const tiemout = useRef(null);
  
  function startTimer(){
    tiemout.current = setTimeout(updateTimer, 1000);
  }
  
  function updateTimer(){
    if (!stop.current){
      setTimer(currentDateString());
    }else{
      clearTimeout(tiemout.current);
    }
  }
  
  function stopTimer(){
    stop.current = true;
  }
  
  function continueTimer(){
    stop.current = false;
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
