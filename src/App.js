
import { useState } from 'react';
import './App.css';
import Countdown from './components/Countdown';
import Header from './components/Header';

function App() {
  const[bgColor,setBgColor]=useState('bg-[#D95550]')
  const[countDownColor,setCountDownColor] =useState('bg-[#DD6662]')

  return (
    <div>
      <div className={`${bgColor}`}>
      <Header countDownColor={countDownColor} />
      <Countdown bgColor={bgColor} countDownColor={countDownColor} setCountDownColor={setCountDownColor} setBgColor={setBgColor}/>
      </div>
    </div>
        
  );
}

export default App;
