import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';
import logo from '../IMGS/logo.png';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);   //주사위 눈 기록 state
  const [otherHistory, setOtherHistory] = useState([]); //주사위 눈 기록 state

  //던지기
  const handleRollClick = () => {
    const nextMyNum = random(6);  //1 ~ 6
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);  //주사위 눈 기록 추가
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  //처음부터(초기화)
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className='App'>
      <div>
        <img className='App-logo' src={logo} alt={logo}></img>
        <h1 className='App-title'>주사위 게임</h1>
        <div>
          <Button className='App-button' color='blue' onClick={handleRollClick}>던지기</Button>
          <Button className='App-button' color='red' onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;