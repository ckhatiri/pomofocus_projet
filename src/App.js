
import { useState } from 'react';
import './App.css';
import Countdown from './components/Countdown';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  //states
  const[bgColor,setBgColor]=useState('bg-[#D95550]')
  const[countDownColor,setCountDownColor] =useState('bg-[#DD6662]')
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
 
  return (
    <div>
      <div className={` ${bgColor}`}>
      <Header countDownColor={countDownColor} />
      <Countdown bgColor={bgColor} countDownColor={countDownColor} setCountDownColor={setCountDownColor} setBgColor={setBgColor}/>
      <Todolist todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} countDownColor={countDownColor} />
      </div>
    </div>
        
  );
}

export default App;
