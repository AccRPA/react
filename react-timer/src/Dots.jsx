import {useState} from 'react';
function Dots(){
    const [dots, setDots] = useState('');
    setTimeout(() => {
        if (dots === '...'){
            setDots('');
        }else{
            setDots(dots + '.');
        }
    },600);

    return <div style={{width: '20px', height: '20px'}}>{dots}</div>;
}

export default Dots;