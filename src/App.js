import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);    //주사위 눈 state (초기값 1)
  const [sum, setSum] = useState(0);    //주사위 눈 총점 state
  const [gameHistory, setGameHistory] = useState([]);   //주사위 눈 기록 state

  //던지기
  const handleRollClick = () => {
    const nextNum = random(6);  //1 ~ 6
    setNum(nextNum);
    setSum(sum + nextNum);  //새로운 주사위 눈 더하기
    setGameHistory([...gameHistory, nextNum]);  //주사위 눈 기록 추가
  };

  //처음부터(초기화)
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color='blue' num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {gameHistory.join(', ')}
      </div>
    </div>
  );
}

export default App;
