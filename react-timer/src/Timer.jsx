import {useState} from 'react';

function Timer(){
    const [deciseconds, setDeciseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    setTimeout(() => {
        if (deciseconds === 9){
            setDeciseconds(0);
            setSeconds(seconds + 1);
            if (seconds === 59){
                setSeconds(0);
                setMinutes(minutes + 1);
            }
        }else{
            setDeciseconds(deciseconds + 1);
        }
    },100);

    return <div>{`
        ${getTimeString(minutes)}:
        ${getTimeString(seconds)}:
        ${getTimeString(deciseconds)}`
        }</div>
}

function getTimeString(unit){
    return `${unit}`.padStart(2, '0');
}

export {Timer};