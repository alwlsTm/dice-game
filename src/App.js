import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);    //주사위 눈 state (초기값 1)
  const [sum, setSum] = useState(0);    //주사위 눈 총점 state
  const [gameHistory, setGameHistory] = useState([]);   //주사위 눈 기록 state

  const [otherNum, setOtherNum] = useState(1);  //상대 주사위 눈 state
  const [otherSum, setOtherSum] = useState(0);  //상대 주사위 눈 총점 state
  const [otherGameHistory, setOtherGameHistory] = useState([]); //주사위 눈 기록 state

  //던지기
  const handleRollClick = () => {
    const nextNum = random(6);  //1 ~ 6
    const nextOtherNum = random(6);

    setNum(nextNum);
    setSum(sum + nextNum);  //새로운 주사위 눈 더하기
    setGameHistory([...gameHistory, nextNum]);  //주사위 눈 기록 추가

    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  //처음부터(초기화)
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);

    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  };
  
  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
